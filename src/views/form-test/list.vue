
<template>
    <a-table size="small" tableLayout="fixed" :columns="houseColumns" :data-source="houseDataSource" :pagination="false"
        bordered>
        <template #bodyCell="{ column, record, index }">
            <template v-if="column.dataIndex === 'operate'">
                    <a-space>
                        <a-typography-link @click="openTab('010_info',{data:record},{title:`查看表单-${record.hth}`})">查看</a-typography-link>
                    </a-space>
                </template>
            <template v-if="column.dataIndex === 'index'">
                {{ index + 1 }}
            </template>
        </template>
        <template #title>
            <a-space>
                <a-button type="primary" @click="openTab('010_add')">新增</a-button>
            </a-space>
        </template>
    </a-table>
</template>

<script setup lang="ts">
import { useTab } from 'vue3-vanilla-tab';

const { openTab } = useTab();

const houseColumns = [
    {
        title: '序号',
        align: 'center',
        dataIndex: 'index',
        width: 50,
    },
    {
        title: '合同号',
        align: 'center',
        dataIndex: 'hth',
    },
    {
        title: '房屋地址',
        align: 'center',
        dataIndex: 'fwdz',
    },
    {
        title: '操作',
        align: 'center',
        dataIndex: 'operate',
        width: 120
    },
];

const houseDataSource = [
    {
        hth: '202111300012',
        fwdz: '鸿顺里街道黄纬路60号1栋2501',
    },
    {
        hth: '20201129302',
        fwdz: '鸿顺里街道黄纬路60号1栋2002',
    },
];
</script>

<style lang="less" scoped></style>

<template>
    <a-breadcrumb>
        <a-breadcrumb-item v-for="crumb in getCrumbs">
            <a>{{ crumb.title }}</a>
            <template #overlay v-if="crumb.children && crumb.children.length > 0">
                <a-menu @click="onContextMenuClick">
                    <template v-for="item in crumb?.children">
                        <a-menu-item v-if="item.type !== ViewTypeEnum.DIR" :key="item.id">
                            <a>{{ item.title }}</a>
                        </a-menu-item>
                    </template>
                </a-menu>
            </template>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { useAttribute, useTab, ViewTypeEnum } from 'vue3-vanilla-tab';

const {
    getCrumbs,
    getViewList,
} = useAttribute();
const { openTab } = useTab();

const onContextMenuClick = ({ key }) => {
    try {
        const findView = getViewList.value.find(item => item.id == key);
        if (findView) {
            const { id, props, title } = findView;
            openTab(id, props as any, { title });
        }
    } catch (error) {
        if (error) {
            message.error(error.message);
        }
    }
}


</script>

<style lang="less" scoped>

</style>

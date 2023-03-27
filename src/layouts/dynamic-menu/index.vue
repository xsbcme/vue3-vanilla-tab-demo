<template>
    <a-menu mode="inline" :openKeys="getOpenMenuKeys" :selectedKeys="[getActiveTab?.viewId]" @select="onMenuItemSelect">
        <template v-for="view in getViewTree">
            <!--menu-->
            <template v-if="view.children.length <= 0">
                <a-menu-item :key="view?.id" v-if="!view.hidden">
                    <template #icon>
                        <component v-if="view.icon" :is="view.icon" />
                    </template>
                    <span>{{ view.title }}</span>
                </a-menu-item>
            </template>
            <!--subMenu-->
            <template v-else>
                <DynamicMenuItem :view="view" />
            </template>
        </template>
    </a-menu>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';
import DynamicMenuItem from './item.vue';
import { useTab, useAttribute } from 'vue3-vanilla-tab';

const {
    getOpenMenuKeys,
    getActiveTab,
    getViewTree,
    getViewList,
} = useAttribute();
const { openTab } = useTab();

const onMenuItemSelect = ({ key }) => {
    try {
        const findView = getViewList.value.find(item => item.id == key);
        if (findView) {
            const { id, props, title } = findView;
            openTab(id, props as any, { title });
        }
    } catch (error) {
        message.error(error.message);
    }
}

</script>
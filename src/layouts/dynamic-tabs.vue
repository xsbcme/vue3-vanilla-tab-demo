<template>
    <a-tabs class="dynamic-tabs" type="editable-card" hide-add :activeKey="getActiveTab?.id" @tabClick="onTabSelect"
        @edit="onTabClose">
        <template #rightExtra>
            <div :style="{ height: '100%', display: 'flex', alignItems: 'center' }">
                <a-space :style="{ marginRight: '8px' }" :size="4">
                    <a-button shape="circle" @click="refreshTabAll()">
                        <template #icon>
                            <RetweetOutlined />
                        </template>
                    </a-button>
                </a-space>
            </div>
        </template>
        <a-tab-pane v-for="(tab, index) in getTabList" :key="tab.id" :closable="index > 0">
            <template #tab>
                <a-dropdown :trigger="['contextmenu']">
                    <div>{{ tab.title }}</div>
                    <template #overlay>
                        <a-menu @click="({ key: menuKey }) => onContextMenuClick(tab.id, menuKey)">
                            <a-menu-item key="refresh">
                                <ReloadOutlined :style="{ marginRight: '8px' }" />
                                <span>刷新</span>
                            </a-menu-item>
                            <a-menu-item key="close-left">
                                <ArrowLeftOutlined :style="{ marginRight: '8px' }" />
                                <span>关闭左侧</span>
                            </a-menu-item>
                            <a-menu-item key="close-right">
                                <ArrowRightOutlined :style="{ marginRight: '8px' }" />
                                <span>关闭右侧</span>
                            </a-menu-item>
                            <a-menu-item key="close-other">
                                <CloseOutlined :style="{ marginRight: '8px' }" />
                                <span>关闭其它</span>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="close-all">
                                <RollbackOutlined :style="{ marginRight: '8px' }" />
                                <span>全部关闭</span>
                            </a-menu-item>
                            <a-menu-item key="refresh-all">
                                <RetweetOutlined :style="{ marginRight: '8px' }" />
                                <span>全部刷新</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </template>
        </a-tab-pane>
    </a-tabs>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { useAttribute, useTab } from 'vue3-vanilla-tab';

const {
    getTabList,
    getActiveTab,
} = useAttribute();
const {
    openTab,
    closeTab,
    refreshTab,
    refreshTabAll,
    closeTabsByLeft,
    closeTabsByRight,
    closeTabsByOther,
    closeTabByAll,
} = useTab();

/**
 * 事件 - tab页右键菜单使用
 * @param tabKey tab页id(uuid)
 * @param menuEvent 自定义菜单事件
 */
const onContextMenuClick = async (tabKey: string, menuEvent: string) => {
    try {
        switch (menuEvent) {
            case 'refresh':
                refreshTab(tabKey);
                break;
            case 'close-left':
                closeTabsByLeft(tabKey);
                break;
            case 'close-right':
                closeTabsByRight(tabKey);
                break;
            case 'close-other':
                closeTabsByOther(tabKey);
                break;
            case 'close-all':
                closeTabByAll();
                break;
            case 'refresh-all':
                refreshTabAll();
                break;
        }
    } catch (error) {
        if (error) {
            message.error(error.message);
        }
    }
}

/**
 * 事件 - tab页被点击调用
 * @param tabKey tab页id(uuid)
 */
const onTabSelect = (tabKey: string) => {
    try {
        const findTab = getTabList.value.find(tab => tab.id === tabKey);
        if (findTab) {
            const { viewId, props, title } = findTab;
            openTab(viewId, props, { title });
        }
    } catch (error) {
        if (error) {
            message.error(error.message);
        }
    }
}

/**
 * 事件 - tab页被关闭时调用
 * @param tabKey tab页id(uuid)
 */
const onTabClose = (tabKey: string) => {
    try {
        closeTab(tabKey);
    } catch (error) {
        if (error) {
            message.error(error.message);
        }
    }
}

</script>

<style lang="less" scoped>
.dynamic-tabs {

    & ::v-deep(.ant-tabs-nav) {
        margin-bottom: 0;

        .ant-tabs-extra-content {
            display: flex;
        }

        .ant-tabs-nav-wrap {
            .ant-tabs-ink-bar {
                visibility: visible;
            }

            .ant-tabs-tab {
                background: none;
                height: 40px;
                line-height: 40px;
                transition: background-color 0.3s, color 0.3s;
                padding: 0 16px;
                border-radius: 0;
                border: none;
                margin: 0;
                position: relative;

                .ant-tabs-tab-remove {
                    margin: 0;
                    padding: 0;
                    position: absolute;
                    right: 0;
                    display: none;
                }

                &:hover .ant-tabs-tab-remove {
                    display: block;
                }
            }

            .ant-tabs-nav-operations .ant-tabs-nav-more {
                padding: 0;
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                cursor: pointer;
            }
        }
    }
}
</style>

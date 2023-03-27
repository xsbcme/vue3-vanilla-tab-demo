<template>
    <article class="container">
        <header class="container-header">
            <div class="container-header-left">
                <MenuOutlined />
                <h2 :style="{ margin: 0, padding: '0.25rem 0.5rem' }">香草标签页插件系统</h2>
            </div>
            <div class="container-header-center">
                <DynamicCrumbs />
            </div>
            <div class="container-header-right">
                <!-- 占位符 -->
            </div>
        </header>
        <div class="container-body">
            <aside class="container-body-left">
                <DynamicMenu :style="{ height: '100%' }" />
            </aside>
            <div class="container-body-right">
                <nav class="container-body-right-tab">
                    <DynamicTabs />
                </nav>
                <main class="container-body-right-main">
                    <DynamicContent />
                </main>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import DynamicCrumbs from './dynamic-crumbs.vue';
import DynamicTabs from './dynamic-tabs.vue';
import DynamicMenu from './dynamic-menu/index.vue';
import { DynamicContent } from 'vue3-vanilla-tab';
</script>

<style lang="less" scoped>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-header {
        height: 3.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-color: rgba(229, 231, 235, 1);
        display: flex;
        align-items: center;

        &-left {
            display: flex;
            align-items: center;
            height: 100%;
        }

        &-center {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
        }

        &-right {
            display: flex;
            align-items: center;

        }
    }

    &-body {
        flex: 1;
        display: flex;
        overflow: auto;

        &-left {
            border-right-style: solid;
            border-color: rgba(229, 231, 235, 1);
            border-right-width: 1px;
            overflow-y: auto;
            overflow-x: hidden;
            user-select: none;
            width: 13.75rem;
            height: 100%;
        }

        &-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: auto;

            &-tab {
                height: 2.5rem;
            }

            &-main {
                flex: 1;
                overflow: auto;
                overflow-x: hidden;
                padding: 0.5rem;
            }
        }
    }
}
</style>

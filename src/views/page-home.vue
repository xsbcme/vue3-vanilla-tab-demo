
<template>
    <div>
        <h2>我是首页</h2>
        <p>小生不才我</p>
        <p>QQ2974550071</p>

        <hr />
        <p>基础演示</p>
        <a-space>
            <a-button @click="openHiddenPage">点我打开隐藏页面</a-button>
            <a-button @click="changeTabTitle">点我设置标签页标题</a-button>
            <a-button @click="toPage('004')">点我跳转到测试页面02</a-button>
            <a-button @click="toPage('004', { a: 666 })">点我跳转到测试页面02并携带参数</a-button>
            <a-button @click="toPage('004', { a: 777 }, '我是新打开的页面')">点我跳转到测试页面02并设置标题</a-button>
        </a-space>
        <hr />
        <p>多实例演示</p>
        <a-space>
            <a-button @click="openSinglePage('008', { a: 111 })">点我打开[008]页面参数为{a:111}</a-button>
            <a-button @click="openSinglePage('008', { a: 222 })">点我打开[008]页面参数为{a:222}</a-button>
        </a-space>
        <hr />
        <p>单实例演示</p>
        <a-space>
            <a-button @click="openSinglePage('009', { a: 111 })">点我打开[009]页面参数为{a:111}</a-button>
            <a-button @click="openSinglePage('009', { a: 222 })">点我打开[009]页面参数为{a:222}</a-button>
        </a-space>
    </div>

</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { useTab } from 'vue3-vanilla-tab';

const { openTab, setTabTitle } = useTab();

const changeTabTitle = () => {
    try {
        setTabTitle('新的标题');
    } catch (err) {
        message.error(err.message);
    }
}

const toPage = (viewId: string, props?: any, title?: string) => {
    try {
        openTab(viewId, props, { title });
    } catch (err) {
        message.error(err.message);
    }
}

const openHiddenPage = () => {
    try {
        openTab('007');
    } catch (err) {
        message.error(err.message);
    }
}

const openSinglePage = (viewId: string, props: any) => {
    try {
        openTab(viewId, props);
    } catch (err) {
        message.error(err.message);
    }
}

</script>

<style lang="less" scoped>

</style>


<template>
    <div>
        <h2>我是测试页面02</h2>
        <p>页面参数:{{ props }}</p>
        <a-space>
            <a-button @click="closePage">点我关闭当前页面</a-button>
        </a-space>
    </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { useTab } from 'vue3-vanilla-tab';

const { closeTab } = useTab();

const props = defineProps<{ a?: number }>();

const closePage = () => {
    try {
        closeTab();
    } catch (err) {
        message.error(err.message);
    }
}

</script>

<style lang="less" scoped>

</style>

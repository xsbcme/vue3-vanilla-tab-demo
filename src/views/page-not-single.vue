
<template>
    <div>
        <h2>多标签页模式</h2>
        <p>当[single]属性为false时触发不同参数打开多个标签页</p>
        <p>页面参数:{{ props }}</p>
    </div>

</template>

<script setup lang="ts">

const props = defineProps<{ a?: number }>();

</script>

<style lang="less" scoped>

</style>

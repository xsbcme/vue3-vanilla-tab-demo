
<template>
    <div>
        <h2>单标签页模式</h2>
        <p>当[single]属性为true时触发不同参数覆盖同一个标签页</p>
        <p>页面参数:{{ props }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{ a: number }>();

</script>

<style lang="less" scoped>

</style>

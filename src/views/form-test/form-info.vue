
<template>
    <div>
        表单
        <p>表单数据：{{ data }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    data?: any
}>();
</script>

<style lang="less" scoped></style>

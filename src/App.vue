
<template>
  <a-config-provider :locale="zhCN">
    <Container />
  </a-config-provider>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import vanillaTab from './tab';
import views from './views';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import Container from '@/layouts/container.vue';

onMounted(() => {
  vanillaTab.initDynamicViews(views);
});

onUnmounted(() => {
  vanillaTab.destory();
});

</script>


<style lang="less">
html,
body {
  overflow-y: hidden;
}

#app {
  height: 100%;
  min-height: 100%;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(130, 130, 130, .5);
  -webkit-border-radius: 4px;
  border-radius: 4px
}

::-webkit-scrollbar-thumb:hover {
  -webkit-border-radius: 4px;
  border-radius: 4px
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px
}

::-webkit-scrollbar-thumb:active {
  -webkit-border-radius: 4px;
  border-radius: 4px
}

::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0);
  border-radius: 0 0 8px 0
}

::-webkit-scrollbar-button {
  background-color: rgba(0, 0, 0, 0);
  height: 2px;
  width: 2px
}

.ant-menu-inline {
  border: 0 !important;
}
</style>

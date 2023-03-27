<template>
    <a-sub-menu :key="view.id">
        <template #icon>
            <component v-if="view.icon" :is="view.icon" />
        </template>
        <template #title>{{ view.title }}</template>
        <template v-for="item in view.children">
            <template v-if="item.children.length <= 0">
                <a-menu-item :key="item.id" v-if="!item.hidden">
                    <template #icon>
                        <component v-if="item.icon" :is="item.icon" />
                    </template>
                    {{ item.title }}
                </a-menu-item>
            </template>
            <template v-else>
                <DynamicMenuItem :view="item" />
            </template>
        </template>
    </a-sub-menu>
</template>

<script lang="ts" setup>
import DynamicMenuItem from './item.vue';
import { toRefs } from 'vue';
import { View } from 'vue3-vanilla-tab';

const props = defineProps<{
    view: View
}>();

const { view } = toRefs(props);

</script>
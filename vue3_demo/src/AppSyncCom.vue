<template>
    <!-- <Suspense>
        <template #default>
            <SyncVue></SyncVue>
        </template>
        <template #fallback>
            
        </template>
    </Suspense> -->
    <skeletonVue></skeletonVue>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import skeletonVue from './views/skeleton/skeleton.vue'
const SyncVue = defineAsyncComponent(() => import('@/views/skeleton/sync.vue'))


</script>

<style lang="scss" scoped></style>

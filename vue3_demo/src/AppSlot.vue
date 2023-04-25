<template>
    <div>
        <Dialog>
            <template #default="{ data }">
                <div>{{ data.name }} -- {{ data.age }}</div>
            </template>
            <template #[name]>
                <div>动态插槽</div>
            </template>
            <template #header>
                <div>上面</div>
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from './views/Dialog/index.vue'

let name = ref('footer')
</script>

<style lang="scss" scoped></style>

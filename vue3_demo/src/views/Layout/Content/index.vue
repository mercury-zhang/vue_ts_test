<template>
    <div class="xm-content">
        <div v-for="item in 100" :key="item">{{ item }}</div>
    </div>
</template>

<script setup>
import { } from "vue"
</script>

<style lang="scss" scoped>
@include b(content) {
    flex: 1;
    overflow: auto;
}
</style>

<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item, index) in data" :key="index">
                <slot name="main" :data="item">{{ item.name }} -- {{ item.age }}</slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
type names = {
    name: string,
    age: number
}

const data = reactive<names[]>([
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 17
    },
    {
        name: '王五',
        age: 20
    },
])
</script>

<style lang="scss" scoped></style>

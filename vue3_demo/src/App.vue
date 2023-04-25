<template>
    <div class="btns">
        <button v-has-show="'shop:create'">创建</button>
        <button v-has-show="'shop:edit'">编辑</button>
        <button v-has-show="'shop:delete'">删除</button>
    </div>

    <div class="box">
        <div header></div>
        <div>内容</div>
    </div>
</template>

<script setup lang="ts">
import type { Directive } from "vue"

localStorage.setItem('userId', 'root-zj')
const permission = [
    'root-zj:shop:edit',
    'root-zj:shop:create',
    'root-zj:shop:delete'
]

const userId = localStorage.getItem('userId')
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes(userId + ':' + binding.value)) {
        el.style.display = "none"
    }
}

</script>

<style lang="scss" scoped></style>

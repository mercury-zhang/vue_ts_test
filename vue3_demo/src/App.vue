<template>
    <div class="content">
        <button @click="add">Add</button>
        <button @click="pop">Pop</button>
        <div class="wraps animate__animated">
            <TransitionGroup enter-active-class="animate__heartBeat" leave-active-class="animate__hinge">
                <div class="item" :key="item" v-for="item in list" style="font-size: 30px;">{{ item }}</div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'animate.css'
import { reactive } from "vue";

const list = reactive<number[]>([1, 2, 3, 4, 5])
const add = () => {
    list.push(list.length + 1)
}

const pop = () => {
    list.pop()
}

</script>

<style lang="scss" scoped></style>

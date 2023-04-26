<template>
    <div ref="box" class="wraps">
        <div>
            <div class="item" v-for="(item, index) in chatList" :key="index">
                <div>{{ item.name }}:</div>
                <div>{{ item.message }}:</div>
            </div>
        </div>
    </div>
    <div class="ipt">
        <div>
            <textarea v-model="ipt" type="text" />
        </div>
        <div>
            <button @click="send">send</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from "vue"
let chatList = reactive([
    { name: '张三', message: "xxxxxxxxxxxx" }
])
let box = ref<HTMLDivElement>()
let ipt = ref('')
const send = async () => {
    chatList.push({
        name: 'zj',
        message: ipt.value
    })
    await nextTick()
    box.value!.scrollTop = 9999
}

</script>

<style lang="scss" scoped>
.wraps {
    margin: 10px auto;
    width: 500px;
    height: 400px;
    overflow: auto;
    overflow-x: hidden;
    background: #fff;
    border: 1px solid #ccc;

    .item {
        width: 100%;
        height: 50px;
        background: #ccc;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid #fff;
    }
}

.ipt {
    margin: 10px auto;
    width: 500px;
    height: 40px;
    background: #fff;
    border: 1px solid #ccc;

    textarea {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
    }

    button {
        width: 100px;
        margin: 10px 0;
        float: right;
    }
}
</style>

<template>
    <div>
        case1:<input v-model="message.foo.bar.name" type="text">
        case2:<input v-model="message.foo.bar.age" type="text">
    </div>
    <div>
        caseEffect1: <input v-model="message2" type="text">
        caseEffect2:<input v-model="message3" type="text">
        <button @click="stopWatch">停止监视</button>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, watch, reactive } from "vue"

let message = reactive({
    foo: {
        bar: {
            name: '小满',
            age: 18
        }
    }
})

let message2 = ref<string>('小满')
let message3 = ref<string>('大满')

watch(() => [message.foo.bar.name, message.foo.bar.age], (newVal, oldVal) => {
    console.log(newVal, oldVal)
})

const stop = watchEffect((oninvalidate) => {
    console.log("message2====>" + message2.value)
    console.log("message3====>" + message3.value)

    oninvalidate(() => {
        console.log('before')
    })
}, {
    flush: "post",
    onTrigger(e) {

    }
})

const stopWatch = () => stop()

</script>

<style lang="scss" scoped></style>

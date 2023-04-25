<template>
    <div style="display: flex;">
        <div @click="switchCom(item, index)" :class="[active == index ? 'active' : '']" class="tabs"
            v-for="(item, index) in data" :key="index">
            <div>{{ item.name }}</div>
        </div>
    </div>
    <component :is="comId"></component>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import Avue from "./views/expame/Avue.vue"
import Bvue from "./views/expame/BVue.vue"
import Cvue from "./views/expame/Cvue.vue"

const comId = ref(Avue)

const active = ref(0)

const data = reactive([
    {
        name: 'A组件',
        com: Avue
    },
    {
        name: 'B组件',
        com: Bvue
    },
    {
        name: 'C组件',
        com: Cvue
    },
])

const switchCom = (item: any, index: number) => {
    comId.value = item.com
    active.value = index
}

</script>

<style lang="scss" scoped>
.active {
    background-color: skyblue;
}

.tabs {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
}
</style>


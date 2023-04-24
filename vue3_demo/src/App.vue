<template>
    <div>
        <thead>
            <tr>
                <th>名称</th>
                <th>数量</th>
                <th>单价</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td align="center">{{ item.name }}</td>
                <td align="center">{{ item.price }}</td>
                <td align="center">
                    <button @click="addOrSub(item, false)">-</button>
                    {{ item.num }}
                    <button @click="addOrSub(item, true)">+</button>
                </td>
                <td align="center">
                    <button @click="del(index)">删除</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    总价:{{ total }}
                </td>
            </tr>

        </tfoot>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue"
type Shop = {
    name: string,
    num: number,
    price: number
}

let total = ref(0)

const data = reactive<Shop[]>([
    {
        name: '衣服',
        num: 1,
        price: 100
    },
    {
        name: '裤子',
        num: 1,
        price: 200
    },
    {
        name: '鞋子',
        num: 1,
        price: 300
    }
])

const addOrSub = (item: Shop, type: boolean): void => {
    if (item.num > 1 && !type) {
        item.num--
    }
    if (item.num < 99 && type) {
        item.num++
    }
}

const del = (index: number) => {
    data.splice(index, 1)
}

total = computed<number>(() => {
    return data.reduce((preVal, curVal) => {
        return preVal + (curVal.num * curVal.price)
    }, 0)
})

</script>

<style lang="scss" scoped></style>

<template>
    <div class="sync">
        <div class="sync-content">
            <div><img :src="data.url"></div>
            <div class="sync-pop">
                <div>{{ data.name }}</div>
                <div>&nbsp;{{ data.age }}</div>
            </div>
        </div>
        <hr>
        <div>{{ data.desc }}</div>
    </div>
</template>

<script setup lang="ts">
import { } from "vue"
import { axios } from '@/server/axios'

interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string
    }
}

const { data } = await axios.get<Data>('../../../public/data.json')

</script>

<style lang="scss" scoped></style>

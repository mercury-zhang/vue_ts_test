<template>
    <div class="sk">
        <div class="sk-2">
            <div class="avatar"></div>
            <div class="name"></div>
        </div>
        <hr>
        <div class="sk-3"></div>
        <div class="sk-3"></div>
    </div>
</template>

<script setup lang="ts">
import { } from "vue"
</script>

<style lang="scss" scoped>
.sk {
    margin: 20px;
    height: 400px;
    width: 100%;

    .sk-2 {
        display: flex;
        margin-bottom: 10px;
        align-items: center;

        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #ccc;
        }

        .name {
            width: 100px;
            height: 20px;
            background-color: #ccc;
            margin-left: 20px;
        }
    }

    hr {
        width: 90%
    }

    .sk-3 {
        margin-top: 10px;
        height: 20px;
        width: 90%;
        background-color: #ccc;
    }
}
</style>

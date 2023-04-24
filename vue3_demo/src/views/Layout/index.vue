<template>
    <div class="xm-box">
        <div>
            <Menu></Menu>
        </div>
        <div class="xm-box__right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script setup>
import Menu from '../Layout/Menu/index.vue'
import Header from '../Layout/Header/index.vue'
import Content from '../Layout/Content/index.vue'
</script>

<style lang="scss" scoped>
@include b(box) {
    @include bfc;
    display: flex;

    @include e(right) {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
}
</style>

<template>
    <div class="xm-test">
        test
        <div class="xm-test__inner">
            el
        </div>
        <div class="xm-test--success">test</div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
@include b(test) {
    color: red;

    @include e(inner) {
        color: blue
    }

    @include m(success) {
        color: green
    }
}
</style>

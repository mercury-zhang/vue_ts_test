<template>
    <div class="A">
        <img id="img" width="300" height="600" src="./assets/images/1.jpg">
    </div>
</template>

<script setup lang="ts">
import useBase64 from './hooks'

useBase64({
    el: '#img'
}).then((res) => {
    console.log(res.baseUrl)
})

</script>   

<style lang="scss" scoped></style>
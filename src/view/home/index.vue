<template>
    <div>
        <p>Home</p>
        <img :src="imgUrl" width="100" height="100"/>
        <!-- <p>This is to JSON ,From {{address}}</p> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import imgUrl from '@/assets/home.png'
// import { address } from '@/assets/home.json'

export default defineComponent({
    name: 'Home',
    setup() {
        // const imgQ = new URL('./.png', import.meta.url)
        // console.log(imgQ);

        return {imgUrl}
    },
})
</script>
<style scoped lang="scss">
    div {
        color: yellowgreen;
    }
</style>

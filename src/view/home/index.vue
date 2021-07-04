<template>
    <div>
        <p>Home</p>
        <img :src="imgUrl" width="100" height="100"/>
        <!-- <p>This is to JSON ,From {{address}}</p> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import imgUrl from '@/assets/123.png'
// import { address } from '@/assets/home.json'

export default defineComponent({
    name: 'Home',
    setup() {
        // const imgQ = new URL('./.png', import.meta.url)
        // console.log(imgQ);
        console.log(import.meta.env.MODE);
        console.log(import.meta.env.BASE_URL);
        console.log(import.meta.env.PROD);
        console.log(import.meta.env.DEV);
        console.log(import.meta.env.VITE_SOME_KEY);
        return {imgUrl}
    },
})
</script>
<style scoped lang="scss">
    div {
        color: yellowgreen;
    }
</style>

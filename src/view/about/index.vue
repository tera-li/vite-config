<template>
   <div>
        <div>
        about
    </div>
    <p :class="example.c">
        import color
    </p>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import example from './example.module.css'

export default defineComponent({
    name: 'About',
    setup() {
        const modules = import.meta.glob('./dir/*.ts')
        // console.log(modules);
        for (const path in modules) {
            modules[path]().then((res) => {
                // console.log(path);
                // console.log(res);
            })
        }
        const modules2 = import.meta.globEager('./dir/*.ts')
        console.log(modules2);
        for (const path in modules2) {
            console.log(modules2[path].a);
        }
        
        return {example}
    },
})
</script>
<style scoped lang="scss">
    div {
        color: red;
    }
</style>

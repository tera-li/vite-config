<template>
  <div>
    <div>
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  setup() {
    const handleLogin = () => {
      fetch("api/login");
    };
    return { handleLogin };
  },
});
</script>
<style scoped lang="scss">
div {
  color: yellowgreen;
}
</style>

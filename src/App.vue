<template>
  <div>
    <ul>
      <li v-for="item of list" :key="item">
        <router-link :to="'/' + item">{{ item }}</router-link>
      </li>
    </ul>
    <router-view v-slot="{ Component }">
      <transition name="fadeIn">
        <component :is="Component" :class="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const routerList = reactive({
      list: ["about", "home", "login"],
    });
    const list = toRef(routerList, "list");
    return {
      list,
    };
  },
});
</script>

<style>
@import url("./index.module.css");
#app {
  display: flex;
  justify-content: center;
  border-radius: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />  -->
  <router-link to="/about">Go to About</router-link>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/login">Go to Login</router-link>
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
@import url('./index.module.css');
#app {
  display: flex;
  justify-content: center;
  border-radius : 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

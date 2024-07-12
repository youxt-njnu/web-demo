<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <v-row class="navbar"
           align="center"
           align-content="center"
           justify="center"
           no-gutters>
      <v-col cols="3"
             class="text-center"
             lg="2"><router-link class="text-indigo-lighten-4"
                     to="/">Home
        </router-link></v-col>
      <v-col cols="3"
             class="text-center"
             lg="2"><router-link class="text-indigo-lighten-4"
                     to="/login">Login</router-link></v-col>
      <v-col cols="3"
             class="text-center"
             lg="2"><router-link class="text-indigo-lighten-4"
                     to="/dashboard">Dashboard</router-link></v-col>
      <v-col cols="3"
             class="text-center"
             lg="2"><router-link class="text-indigo-lighten-4"
                     to="/dashboard/about">About</router-link></v-col>
    </v-row>
  </div>
</template>

<style>
.common-layout {
  width: 100%;
  box-sizing: border-box;
}
/* .el-header {
  padding: 0 50px; 
} */
.navbar {
  position: fixed;
  width: 100%; /* 确保导航栏覆盖整个屏幕宽度 */
  top: 0;
  left: 0;
  z-index: 1000; /* 高 z-index 保证导航栏在内容之上 */
  background-color: rgba(51, 51, 51, 0.793); /* 可选：使背景半透明 */
  line-height: 70px; /* Adjust the height of the navbar */
  font-size: 16px; /* Adjust font size as needed */
}
</style>
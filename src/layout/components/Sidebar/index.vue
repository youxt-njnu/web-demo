<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"
                         :rail="!isCollapse"
                         class="w-auto"
                         permanent
                         @click="isCollapse = true">
      <v-list-item prepend-avatar="#"
                   title="Home"
                   nav>
        <template v-slot:append>
          <v-btn icon="mdi-chevron-left"
                 variant="text"
                 @click.stop="isCollapse = !isCollapse"></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact"
              nav>
        <v-list-item v-for="route in store.permission_routes"
                     :prepend-icon="route.icon"
                     :title="route.meta.title"
                     :key="route.path"
                     :to="route.path"
                     link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script setup>
import { useAppStore } from '@/stores/useAppStore.js'

const store = useAppStore()

const drawer = true
const isCollapse = !store.sidebar.opened

const variables = {
  menuBg: '#FFFFFF', // 背景色
  menuText: '#000000', // 文字颜色
  menuActiveText: '#FF0000' // 激活时的文字颜色
}
</script>

<style scoped>
</style>
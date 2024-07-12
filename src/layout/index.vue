<script setup>
import RightPanel from '@/components/RightPanel/index.vue'
import { AppMain, Navbar, Sidebar, Settings, TagsView } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
import { computed } from 'vue'
import { useAppStore } from '@/stores/useAppStore.js'

const store = useAppStore()
const classObj = computed(() => {
  store.classObj
})
</script>

<template>
  <div :class="classObj">
    <Sidebar class="sidebar-container" />
    <div :class="{hasTagsView: store.needTagsView}"
         class="main-container">
      <div :class="{'fixed-header': store.fixedHeader}">
        <Navbar />
        <TagsView v-if="store.needTagsView" />
      </div>
      <AppMain />
      <RightPanel v-if="store.showSettings">
        <Settings />
      </RightPanel>
    </div>
  </div>
</template>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - var(--sidebar-width));
  transition: width 0.28s;
}

/* .hideSidebar .fixed-header {
  width: calc(100% - 54px);
} */
</style>
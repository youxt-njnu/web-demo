// stores/useAppStore.js
import router from '@/router/index.js'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    sidebar: {
      opened: true,
      withoutAnimation: true
    },
    device: 'desktop',
    settings: {
      showSettings: true,
      tagsView: true,
      fixedHeader: true
    },
    permission_routes: router.getRoutes()
  }),
  getters: {
    classObj: (state) => ({
      hideSidebar: !state.sidebar.opened,
      openSidebar: state.sidebar.opened,
      withoutAnimation: state.sidebar.withoutAnimation,
      mobile: state.device === 'mobile'
    }),
    needTagsView: (state) => state.settings.tagsView,
    fixedHeader: (state) => state.settings.fixedHeader,
    showSettings: (state) => state.settings.showSettings
  }
})

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import 'vuetify/styles'

import '@/assets/style/main.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { createI18n, useI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

import { zh } from '../locale/zh.js'
import { en } from '../locale/en.js'

const messages = {
  en: en,
  zh: zh
}

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})
const vuetify = createVuetify({
  components,
  directives,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n })
  },
  theme: {
    defaultTheme: 'light'
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md
    }
  }
})

export { i18n, vuetify }

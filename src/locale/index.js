// import VueClipboard from 'vue-clipboard2'
import { createI18n } from 'vue-i18n'
import useStore from '../stores/store.js'
import pinia from '../stores/index.js'


// import { store } from '../main'

import en from './lang/en.js'
import zhCN from './lang/zh-CN.js'
import zhTW from './lang/zh-TW.js'
import tr from './lang/tr.js'

const store = useStore(pinia)

const i18n = createI18n({
  locale: store.settings.lang,
  messages: {
    en,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    tr,
  },
  silentTranslationWarn: true,
})

export default i18n

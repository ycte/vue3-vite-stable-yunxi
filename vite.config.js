import { URL, fileURLToPath } from 'node:url'

import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      // eslint-disable-next-line n/prefer-global/process
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env': {
      VUE_APP_NETEASE_API_URL: '/api',
      VUE_APP_ELECTRON_API_URL: '/api',
      VUE_APP_ELECTRON_API_URL_DEV: 'http://127.0.0.1:10754',
      VUE_APP_LASTFM_API_KEY: '09c55292403d961aa517ff7f5e8a3d9c',
      VUE_APP_LASTFM_API_SHARED_SECRET: '307c9fda32b3904e53654baff215cb67',
      DEV_SERVER_PORT: '20201',
    },
  },
})

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      src: fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env": {
      VUE_APP_NETEASE_API_URL: "/api",
      VUE_APP_ELECTRON_API_URL: "/api",
      VUE_APP_ELECTRON_API_URL_DEV: "http://127.0.0.1:10754",
      VUE_APP_LASTFM_API_KEY: "09c55292403d961aa517ff7f5e8a3d9c",
      VUE_APP_LASTFM_API_SHARED_SECRET: "307c9fda32b3904e53654baff215cb67",
      DEV_SERVER_PORT: "20201",
    },
  },
});

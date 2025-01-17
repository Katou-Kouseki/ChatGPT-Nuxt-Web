// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "url";

export default defineNuxtConfig({
    head: {
      title: 'Chat With AI', // 添加标题
    },
    css: ['@src/styles/index.less'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    routeRules: {
        '/**': { ssr: false },
        '/chat-process': { ssr: true },
    },
    alias: {
        "@src": fileURLToPath(new URL('./src', import.meta.url)),
    }
})

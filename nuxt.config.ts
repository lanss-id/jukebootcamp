import { URL, fileURLToPath, pathToFileURL } from "url";
import { Script } from "vm";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: { 
        head: {
            script: [
                {src: 'https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js'}
            ]
        }
    }
  })
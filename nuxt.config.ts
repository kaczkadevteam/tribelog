// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },

  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ],
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  telemetry: false,

  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  devServer: {
    port: 3001,
  },
})

export default defineNuxtConfig({
  // Main config
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ],
  },

  // Build
  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  // Dev
  telemetry: false,

  devServer: {
    port: 4001,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})

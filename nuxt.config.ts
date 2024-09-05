// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  // Main config
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-viewport',
    '@vee-validate/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
  ],

  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ],
  },

  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      baseUrl: process.env.APP_BASE_URL,
      apiBaseClientUrl: process.env.API_BASE_CLIENT_URL,
      apiBaseServerUrl: process.env.API_BASE_SERVER_URL,
    },
  },

  // Module config
  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  icon: {
    customCollections: [
      {
        prefix: 'tl',
        dir: join(__dirname, './app/assets/icons'),
      },
    ],
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    vueI18n: './i18n.config.ts',
    baseUrl: process.env.NUXT_I18N_BASE_URL,
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
    port: 3001,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})

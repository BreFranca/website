// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/eslint'],
  i18n: {
    locales: [
      { code: 'pt', iso: 'pt-BR', name: 'Português', file: 'pt.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'pt',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    langDir: '../locales',
    lazy: true,
  },

  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
})

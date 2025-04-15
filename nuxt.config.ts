// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@/assets/styles/app.scss"],
  ssr: false,
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_APP_API_URL,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },
  imports: {
    dirs: ["./stores"],
  },
  vite: {
    build: {
      sourcemap: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@use "assets/styles/_global.scss" as *; @use "drocket/mixin.scss";`,
        },
      },
    },
  },
  modules: ["@nuxtjs/device", "nuxt-swiper", "@pinia/nuxt"],
});

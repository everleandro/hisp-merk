// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@/assets/styles/app.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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

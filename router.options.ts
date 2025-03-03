import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    console.log("Scroll behavior ejecutado");
    setTimeout(() => {
      const scrollContainer = document.querySelector(".app-scroll-container");
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // Pequeño retraso para asegurar que la página cargó
  },
};

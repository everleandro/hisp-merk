import * as IconSvg from "~/constants/icons-svg"; // Importa todos los iconos
import type { Component } from "vue";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      iconSvg: IconSvg as Record<string, Component>,
    },
  };
});

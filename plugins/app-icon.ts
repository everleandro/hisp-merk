import AppIcon from "~/constants/app-icon";
import type { IconConfig } from "~/constants/app-icon";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      appIcon: AppIcon as Record<string, IconConfig>,
    },
  };
});

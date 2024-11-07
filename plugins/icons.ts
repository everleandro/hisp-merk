import type { IconPath } from "drocket";
import Icons from "~/constants/icons";

export const iconFactory: Record<string, IconPath | Array<IconPath> | string> =
  Icons;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      icon: iconFactory,
    },
  };
});

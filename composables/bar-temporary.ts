import type { TemporaryBar } from "~/types/temporary-bar";
import icons from "~/constants/icons";
export function useBarTemporary(config: Partial<TemporaryBar> = {}) {
  const setTempBarContent =
    inject<(newConfig: TemporaryBar | null) => void>("setTempBarContent");

  const router = useRouter();
  const route = useRoute();

  onNuxtReady(() => {
    if (Object.keys(config).length > 0) setBar(config);
  });

  onBeforeRouteLeave((to) => {
    if (to.path.split("/").filter(Boolean).length === 1) {
      if (setTempBarContent) {
        setTempBarContent(null);
      }
    }
  });

  const goUpOneLevel = () => {
    const pathSegments = route.path.split("/").filter(Boolean); // Divide la ruta y elimina vacíos
    if (pathSegments.length > 1) {
      pathSegments.pop(); // Elimina el último segmento
      router.push("/" + pathSegments.join("/")); // Redirige a la nueva ruta
    } else {
      router.go(-1); // Redirige a la raíz
    }
  };

  const setBar = (_config: Partial<TemporaryBar> = {}) => {
    if (!_config.leftButtonList) {
      _config.leftButtonList = [
        {
          icon: icons.chevronLeft,
          class: "white",
          color: "secondary",
          action: () => goUpOneLevel(),
        },
      ];
    }

    if (setTempBarContent) setTempBarContent({ ..._config });
  };
  return { setBar };
}

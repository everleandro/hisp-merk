import type { TemporaryBar } from "~/types/temporary-bar";
import icons from "~/constants/icons";
export function useProfile(config: Partial<TemporaryBar>) {
  const setTempBarContent =
    inject<(newConfig: TemporaryBar | null) => void>("setTempBarContent");

  const router = useRouter();
  const route = useRoute();

  onNuxtReady(() => {
    if (!config.leftButtonList) {
      config.leftButtonList = [
        {
          icon: icons.chevronLeft,
          action: () => goUpOneLevel(),
        },
      ];
    }

    if (setTempBarContent) setTempBarContent({ ...config });
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
    console.log(pathSegments);
    if (pathSegments.length > 1) {
      pathSegments.pop(); // Elimina el último segmento
      router.push("/" + pathSegments.join("/")); // Redirige a la nueva ruta
    } else {
      router.push("/"); // Redirige a la raíz
    }
  };
}

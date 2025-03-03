import { AppBar, AppBarType } from "~/types/bar";
import Icon from "~/constants/icons";
import { BarButton } from "~/types/bar";

const appBar = ref<AppBar>(new AppBar());

export function useAppBar(
  config: Partial<AppBar> = {},
  type: AppBarType = AppBarType.DEFAULT
) {
  const { drawerModel } = useAppDrawer();
  const router = useRouter();
  const route = useRoute();
  const instance = getCurrentInstance();

  const buttonMenu = new BarButton({
    // text: true,
    icon: Icon.menu,
    // btnClass: "btn--transparent",
    action: () => {
      drawerModel.value = !drawerModel.value;
    },
  });

  onNuxtReady(() => {
    if (Object.keys(config).length > 0) setBar(config, type);
  });

  // Solo ejecutar onMounted si está en un layout
  if (instance?.type?.__name === "index") {
    onMounted(() => {
      appBar.value.leftButtonList = [buttonMenu];
    });
  }
  // Solo ejecutar onMounted si no está en un el layout
  if ((instance?.type?.__name || instance?.type?.name) !== "index") {
    onBeforeRouteLeave((to) => {
      if (to.path.split("/").filter(Boolean).length === 1) {
        setBar({});
      }
    });
  }

  const goUpOneLevel = () => {
    const pathSegments = route.path.split("/").filter(Boolean); // Divide la ruta y elimina vacíos
    if (pathSegments.length > 1) {
      pathSegments.pop(); // Elimina el último segmento
      router.push("/" + pathSegments.join("/")); // Redirige a la nueva ruta
    } else {
      router.go(-1); // Redirige a la raíz
    }
  };

  const setBar = (
    _config: Partial<AppBar> = {},
    type: AppBarType = AppBarType.DEFAULT
  ) => {
    if (type === AppBarType.GO_BACK) {
      _config.leftButtonList = [
        new BarButton({
          icon: Icon.arrowBack,
          action: goUpOneLevel,
        }),
      ];
      _config.rigthButtonList = [];
    } else if (
      type === AppBarType.DEFAULT ||
      !type ||
      _config.leftButtonList?.length === 0
    ) {
      _config.leftButtonList = [buttonMenu];
    }
    appBar.value = new AppBar(_config);
  };

  return { setBar, appBar, goUpOneLevel };
}

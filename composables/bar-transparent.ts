export function useBarTransparent() {
  const setBarClass = inject<(newClass: string) => void>("setBarClass") as (
    newClass: string
  ) => void;

  onNuxtReady(() => {
    setBarClass("app-bar--transparent");
  });

  onBeforeRouteLeave((to) => {
    setBarClass("white");
  });
}

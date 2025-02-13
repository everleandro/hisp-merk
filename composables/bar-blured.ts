export function useBarBlured() {
  const setBarClass = inject<(newClass: string) => void>("setBarClass") as (
    newClass: string
  ) => void;

  onNuxtReady(() => {
    setBarClass("app-bar--blured");
  });

  onBeforeRouteLeave((to) => {
    setBarClass("white");
  });
}

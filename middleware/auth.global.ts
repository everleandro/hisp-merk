import { PUBLIC_ROUTES } from "@/constants/links";
export default defineNuxtRouteMiddleware(async (to) => {
  const publicRoutes = [...PUBLIC_ROUTES, "/login", "/register/create"];
  const productPage = /^\/store\/[^/]+\/product\/\d+$/;
  const storePage = /^\/store\/[^/]+$/;

  if (
    publicRoutes.includes(to.path) ||
    to.path == "/" ||
    productPage.test(to.path) ||
    storePage.test(to.path)
  )
    return;
  const auth = useAuthStore();
  const token = await auth.loadToken();

  if (token) {
    if (auth.user) {
      return;
    } else {
      try {
        await auth.getUser(); // Si hay token pero no usuario, cargarlo
        return;
      } catch (error) {
        auth.logout(); // Si falla, limpiar sesión
        return navigateTo("/login");
      }
    }
  }
  return navigateTo("/login"); // No hay token, redirigir al login
});

import { PUBLIC_ROUTES } from "@/constants/links";
export default defineNuxtRouteMiddleware(async (to) => {
  const publicRoutes = [...PUBLIC_ROUTES, "/login", "/register", "/store"];
  console.log(publicRoutes);
  console.log(publicRoutes.includes(to.path));
  if (publicRoutes.includes(to.path)) return;
  const auth = useAuthStore();
  const token = await auth.loadToken();

  if (!token) {
    return navigateTo("/login"); // No hay token, redirigir al login
  }

  if (!auth.user) {
    try {
      await auth.getUser(); // Si hay token pero no usuario, cargarlo
    } catch (error) {
      auth.logout(); // Si falla, limpiar sesión
      return navigateTo("/login");
    }
  }
});

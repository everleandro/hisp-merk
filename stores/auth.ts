// stores/auth.ts
import { defineStore } from "pinia";
import { Capacitor } from "@capacitor/core";
import type { User } from "~/types/user";
import { useApiUrl } from "~/utils/use-api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await $fetch(useApiUrl() + "/auth/jwt/create", {
          method: "POST",
          body: { email, password },
        });
        this.token = response.access as string;
        if (Capacitor.getPlatform() !== "web") {
          // En la app móvil, usar el plugin Preferences
          // await Preferences.set({ key: "authToken", value: this.token });
          localStorage.setItem("authToken", this.token);
        } else {
          // En el navegador, usar localStorage
          localStorage.setItem("authToken", this.token);
        }
        await this.getUser();
        return true;
      } catch (error: any) {
        // Capturar error de respuesta del servidor
        if (error?.data) {
          alert(error.data?.detail || "Error al iniciar sesión"); // Muestra el mensaje devuelto por el backend
        } else {
          alert("Ocurrió un error inesperado");
        }
        return false;
      }
    },

    async logout() {
      // try {
      //   const response = await $fetch(API_URL + "/api/auth/token/logout", {
      //     method: "POST",
      //   });
      // } catch {}

      this.token = null;
      this.user = null;
      if (Capacitor.getPlatform() !== "web") {
        // await Preferences.remove({ key: "authToken" });
        localStorage.removeItem("authToken");
      } else {
        localStorage.removeItem("authToken");
      }
    },
    async getUser() {
      if (this.user) {
        return await Promise.resolve(this.user);
      }
      const token = await this.loadToken();
      if (!token) return;

      try {
        const data = await $fetch(useApiUrl() + "/auth/users/me/", {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });

        if (data) {
          this.user = data;
        }
        return this.user;
      } catch (error: any) {
        // Capturar error de respuesta del servidor
        if (error?.data) {
          alert(error.data?.detail || "Error al iniciar sesión"); // Muestra el mensaje devuelto por el backend
        } else {
          alert("Ocurrió un error inesperado");
        }
        return false;
      }
    },

    async loadToken() {
      if (Capacitor.getPlatform() !== "web") {
        // En la app móvil, usar el plugin Preferences
        // const { value } = await Preferences.get({ key: "authToken" });
        return Promise.resolve(localStorage.getItem("authToken"));
        // return value;
      } else {
        // En el navegador, usar localStorage
        return Promise.resolve(localStorage.getItem("authToken"));
      }
    },
  },
});

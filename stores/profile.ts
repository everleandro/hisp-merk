// stores/auth.ts
import { defineStore } from "pinia";
import type { User } from "~/types/user";
import type { Response } from "~/types/response";
const config = useRuntimeConfig();
export const useProfileStore = defineStore("profile", {
  actions: {
    async register(user: Partial<User>): Promise<Response> {
      try {
        const response = await $fetch(config.public.apiBase + "/auth/users/", {
          method: "POST",
          body: { ...user, re_password: user.password },
        });

        if (response?.status === 201) {
          return { success: true, data: response.data };
        } else {
          return { success: true, data: response.data };
        }
      } catch (error) {
        const { data } = error as Response;
        return { success: false, data };
      }
    },
  },
});

export default defineNuxtPlugin(() => {
  const auth = useAuthStore();
  return {
    provide: {
      auth: auth,
    },
  };
});

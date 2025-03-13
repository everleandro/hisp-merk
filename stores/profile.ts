export const userProfileStore = defineStore("userProfile", {
  state: () => ({
    email: "",
    first_name: "",
    last_name: "",
  }),

  getters: {
    getUser: (state) => {
      return {
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email,
      };
    },
  },

  actions: {},
});

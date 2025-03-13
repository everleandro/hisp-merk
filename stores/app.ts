export interface BarSetting {
  title?: string | undefined;
  logo?: boolean;
  backButton?: boolean;
  menuButton?: boolean;
  barClass?: string;
  bellButton?: boolean;
}

export const useApp = defineStore("app", {
  state: () => ({
    barTitle: <string | undefined>"",
    barLogo: true,
    barClass: "primary",
    barBackButton: false,
    menuButton: true,
    barBellButton: true,
  }),

  getters: {
    getBarSetting: (state) => {
      return {
        title: state.barTitle,
        class: state.barClass,
        logo: state.barLogo,
        backButton: state.barBackButton,
        menuButton: state.menuButton,
        bellButton: state.barBellButton,
      };
    },
  },

  actions: {
    setBar(setting: BarSetting) {
      this.barTitle = setting.title;
      this.barClass = setting.barClass ?? "primary";
      this.barLogo = setting.logo ?? true;
      this.menuButton = setting.menuButton ?? true;
      this.barBackButton = setting.backButton ?? false;
      this.barBellButton = setting.bellButton ?? true;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot));
}

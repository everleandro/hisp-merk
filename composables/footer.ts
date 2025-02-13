import { ref } from "vue";
interface FooterConfig {
  show: boolean;
}
const footerSetting = ref({
  show: true,
});

export function useFooter() {
  const defaultConfig = {
    show: true,
  };

  const setFooterConfig = (config: FooterConfig) => {
    footerSetting.value = { ...defaultConfig, ...config };
  };

  return { footerSetting: footerSetting, setFooterConfig };
}

import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.dlahavana.dhavana",
  appName: "dhavana",
  // webDir: '.output/public',
  webDir: "dist",
  bundledWebRuntime: false,
  // ios: {
  //   // Fuerza la superposición del WebView con la barra de estado
  //   contentInset: "always",
  // },
};

export default config;

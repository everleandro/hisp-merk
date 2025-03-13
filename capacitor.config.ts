import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.dlahavana.dhavana",
  appName: "dhavana",
  // webDir: '.output/public',
  webDir: "dist",
  server: {
    url: "http://10.0.2.2:8000", // Asegúrate de que la IP del backend esté correctamente configurada
    cleartext: true, // Esto es importante si estás usando HTTP y no HTTPS
  },
  // bundledWebRuntime: false,
  // ios: {
  //   // Fuerza la superposición del WebView con la barra de estado
  //   contentInset: "always",
  // },
};

export default config;

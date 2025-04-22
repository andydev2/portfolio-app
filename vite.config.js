import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Carpeta de salida
  },
  base: "/", // Asegura que las rutas funcionen correctamente en producción
});

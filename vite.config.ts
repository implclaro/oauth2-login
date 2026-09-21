import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

 process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  return {
    plugins: [
      react(),
      tailwindcss()
    ],
   resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url))
        }
      ]
    },
    server: {
      port: Number(process.env.DEFAULT_PORT),
      host: '0.0.0.0',
      proxy: {
        "/api": {
          target: process.env.VITE_BASE_API_URI,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, "")
        }
      },
      // https: {
      //   key: process.env.PRIVATE_KEY_CERT_PATH,
      //   cert: process.env.CERT_PATH
      // },
    }
  }
});

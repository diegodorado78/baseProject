/* eslint-disable no-undef */
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import { resolve } from "path";
dotenv.config();

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  // Load environment variables based on the mode
  const env = dotenv.config({
    path: isProduction ? ".env.production" : ".env.development",
  }).parsed;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src/*"),
        "@components": resolve(__dirname, "src/components"),
        "@api": resolve(__dirname, "src/api"),
        "@pages": resolve(__dirname, "src/pages"),
        "@assets": resolve(__dirname, "src/assets"),
        "@routes": resolve(__dirname, "src/routes"),
        "@context": resolve(__dirname, "src/context"),
      },
    },
    define: {
      "process.env": Object.keys(env).reduce((acc, key) => {
        acc[key] = JSON.stringify(env[key]);
        return acc;
      }, {}),
    },
    // Other configurations...
  };
});

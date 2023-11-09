import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
dotenv.config();

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  // Load environment variables based on the mode
  const env = dotenv.config({
    path: isProduction ? ".env.production" : ".env.development",
  }).parsed;

  return {
    plugins: [react()],
    define: {
      "process.env": Object.keys(env).reduce((acc, key) => {
        acc[key] = JSON.stringify(env[key]);
        return acc;
      }, {}),
    },
    // Other configurations...
  };
});

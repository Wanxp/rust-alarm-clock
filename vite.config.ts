import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'
import {fileURLToPath} from "node:url";

//@ts-ignore
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue()],
    define: {
        global: {},
        'process.env': {

        },
      'process.platform': JSON.stringify(process.platform),

    },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 4000,
    strictPort: true,
    host: true,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 4000,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  resolve: {
    extensions: ['.js','.vue','.json','.ts'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
}));

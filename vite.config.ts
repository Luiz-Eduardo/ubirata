import { defineConfig } from 'vitest/config'
import { fileURLToPath } from "url"
import path from 'path'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
      ],
      imports: ["vue", "vue-router", "pinia"],
      dts: true,
      vueTemplate: true,
      eslintrc: { enabled: true }
    }),
  ],
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
    includeSource: ["src/**/*.{js,ts,vue}"]
  },
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/@Pages"),
    }
  }
})

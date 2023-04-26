import { defineConfig } from 'vitest/config'
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
      imports: ["vue", "vue-router"],
      dts: true,
      vueTemplate: true,
      eslintrc: { enabled: true }
    }),
  ],
  test: {
    globals: true,
    includeSource: ["src/**/*.{js,ts,vue}"],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    },
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 3000,
  }
})

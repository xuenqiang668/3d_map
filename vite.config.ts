import * as path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import postcssPresetEnv from 'postcss-preset-env'
import UnoCSS from 'unocss/vite'
import { templateCompilerOptions } from '@tresjs/core'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue({ ...templateCompilerOptions }), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  }
})

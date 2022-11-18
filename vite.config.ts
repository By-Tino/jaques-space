import path from 'path';
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // 自动导入 vue uniapp 的常用方法和属性
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/
      ],
      imports: [
        'vue',
        'pinia',
        'uni-app'
      ],
      dts: path.resolve(__dirname, './typings/auto-imports.d.ts')
    }),
    // 自动导入 src/components 下的组件
    Components({
      dirs: path.resolve(__dirname, './src/components')
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/normalize.scss";
        `,
        javascriptEnabled: true
      }
    }
  }
});

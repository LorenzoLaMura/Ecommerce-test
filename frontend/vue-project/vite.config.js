import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('/src', import.meta.url))
    }
  },
})

// const Dotenv = require('dotenv-webpack');


// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new Dotenv()
//     ]
//   }
// }
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '' : 'public'
// };



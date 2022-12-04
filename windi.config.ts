import { defineConfig } from 'vite-plugin-windicss'
import shortcuts from './windi.shortcuts'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['Jost']
    }
  },
  shortcuts
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vize from '@vizejs/vite-plugin'

const customBlock = {
  name: 'message-custom-block',

  transform(code, id) {
    const query = new URLSearchParams(id.split('?')[1])

    if (!query.has('vue') || query.get('type') !== 'message') return

    return {
      code: `export default (component) => {
        component.customMessage = ${JSON.stringify(code.trim())}
      }`,
      map: null,
    }
  },
}

export default defineConfig(({ mode }) => ({
  plugins: [mode === 'vue' ? vue() : vize(), customBlock],
}))

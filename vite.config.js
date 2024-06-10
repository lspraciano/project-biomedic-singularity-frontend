import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        port: 8001,
        strictPort: true,
    },
    server: {
        port: 8001,
        strictPort: true,
        host: true,
    },
})

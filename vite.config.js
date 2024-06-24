import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'
export default defineConfig({
    plugins: [
        react(),
        mkcert()
    ],
    preview: {
        port: 8001,
        strictPort: true,
    },
    server: {
        https: true,
        port: 8001,
        strictPort: true,
        host: true
    }
})

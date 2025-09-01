import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/': {
                target: 'https://lorypelli.dev/stats/',
                changeOrigin: true,
                secure: false
            },
        },
    },
});

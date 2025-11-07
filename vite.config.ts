import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 7777,
        strictPort: false,
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        assetsInlineLimit: 4096,
    },
    base: '/dentalcare.stom-tum/',
    assetsInclude: ['**/*.svg']
})
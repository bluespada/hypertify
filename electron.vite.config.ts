import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
    main: {
        envPrefix: "M_VITE",
        build: {
            outDir: 'out/main',
            rollupOptions: {
                input: {
                    index: path.resolve(__dirname, "electron/main/index.ts"),
                }
            }
        },
        plugins: [externalizeDepsPlugin()],
    },
    preload: {
        build: {
            outDir: 'out/preload',
            rollupOptions: {
                input: {
                    index: path.resolve(__dirname, "electron/preload/index.ts"),
                }
            }
        },
        plugins: [externalizeDepsPlugin()],
    },
    renderer: {
        root: ".",
        build: {
            outDir: 'out/renderer',
            rollupOptions: {
                input: {
                    index: path.resolve(__dirname, "index.html"),
                }
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, "src/"),
            },
        },
        plugins: [ externalizeDepsPlugin(), react(), VitePWA({ registerType: "autoUpdate" }) ]
    }
})

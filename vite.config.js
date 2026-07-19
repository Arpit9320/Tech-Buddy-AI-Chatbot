import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.svg",
      ],

      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },

      manifest: {
        name: "Tech Buddy AI",
        short_name: "TechBuddy",

        description:
          "Offline AI Chatbot powered by WebLLM",

        theme_color: "#070707",

        background_color: "#070707",

        display: "standalone",

        start_url: "/",

        icons: [
          // {
          //   src: "best_logo_Nobg(192x192).png",
          //   sizes: "192x192",
          //   type: "image/png",
          // },

          {
            src: "best_logo_Nobg(512x512).png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});


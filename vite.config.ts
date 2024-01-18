import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath } from "node:url"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      }
    ],
  },
})

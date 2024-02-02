import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath } from "node:url"
import svgr from "vite-plugin-svgr"
import version from "vite-plugin-package-version"
import { visualizer } from "rollup-plugin-visualizer"
import dayjs from "dayjs"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "gh-pages" ? "/easy-paper-reader" : "/",
  plugins: [react(), svgr(), version(), visualizer()],
  define: {
    "import.meta.env.BUILD_DATE": JSON.stringify(dayjs().format("YYYY-MM-DD")),
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
}))

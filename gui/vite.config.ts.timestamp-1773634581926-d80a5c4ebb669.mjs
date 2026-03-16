// vite.config.ts
import { sentryVitePlugin } from "file:///C:/Users/julie/continue/continue/gui/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
import react from "file:///C:/Users/julie/continue/continue/gui/node_modules/@vitejs/plugin-react-swc/index.js";
import { resolve } from "path";
import tailwindcss from "file:///C:/Users/julie/continue/continue/gui/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///C:/Users/julie/continue/continue/gui/node_modules/vitest/dist/config.js";
var __vite_injected_original_dirname = "C:\\Users\\julie\\continue\\continue\\gui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sentryVitePlugin({
      org: "continue-xd",
      project: "continue"
    })
  ],
  build: {
    sourcemap: true,
    // Change the output .js filename to not include a hash
    rollupOptions: {
      input: {
        index: resolve(__vite_injected_original_dirname, "index.html"),
        indexConsole: resolve(__vite_injected_original_dirname, "indexConsole.html")
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: ["*", "Content-Type", "Authorization"],
      credentials: true
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/util/test/setupTests.ts",
    onConsoleLog(log, type) {
      if (type === "stderr") {
        if ([
          "contentEditable",
          "An update to Chat inside a test was not wrapped in act",
          "An update to TipTapEditor inside a test was not wrapped in act",
          "An update to ThinkingIndicator inside a test was not wrapped in act",
          "The current testing environment is not configured to support act",
          "target.getClientRects is not a function",
          "prosemirror"
        ].some((text) => log.includes(text))) {
          return false;
        }
      }
      return true;
    },
    onUnhandledRejection(err) {
      if (err.message?.includes("getClientRects") || err.message?.includes("prosemirror")) {
        return false;
      }
      return true;
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqdWxpZVxcXFxjb250aW51ZVxcXFxjb250aW51ZVxcXFxndWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGp1bGllXFxcXGNvbnRpbnVlXFxcXGNvbnRpbnVlXFxcXGd1aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvanVsaWUvY29udGludWUvY29udGludWUvZ3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgc2VudHJ5Vml0ZVBsdWdpbiB9IGZyb20gXCJAc2VudHJ5L3ZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgICBzZW50cnlWaXRlUGx1Z2luKHtcbiAgICAgIG9yZzogXCJjb250aW51ZS14ZFwiLFxuICAgICAgcHJvamVjdDogXCJjb250aW51ZVwiLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcblxuICAgIC8vIENoYW5nZSB0aGUgb3V0cHV0IC5qcyBmaWxlbmFtZSB0byBub3QgaW5jbHVkZSBhIGhhc2hcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBpbmRleDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgICAgaW5kZXhDb25zb2xlOiByZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleENvbnNvbGUuaHRtbFwiKSxcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLmpzYCxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLmpzYCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLltleHRdYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgY29yczoge1xuICAgICAgb3JpZ2luOiBcIipcIixcbiAgICAgIG1ldGhvZHM6IFtcIkdFVFwiLCBcIlBPU1RcIiwgXCJQVVRcIiwgXCJERUxFVEVcIiwgXCJQQVRDSFwiLCBcIk9QVElPTlNcIl0sXG4gICAgICBhbGxvd2VkSGVhZGVyczogW1wiKlwiLCBcIkNvbnRlbnQtVHlwZVwiLCBcIkF1dGhvcml6YXRpb25cIl0sXG4gICAgICBjcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgIHNldHVwRmlsZXM6IFwiLi9zcmMvdXRpbC90ZXN0L3NldHVwVGVzdHMudHNcIixcbiAgICBvbkNvbnNvbGVMb2cobG9nLCB0eXBlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJzdGRlcnJcIikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJjb250ZW50RWRpdGFibGVcIixcbiAgICAgICAgICAgIFwiQW4gdXBkYXRlIHRvIENoYXQgaW5zaWRlIGEgdGVzdCB3YXMgbm90IHdyYXBwZWQgaW4gYWN0XCIsXG4gICAgICAgICAgICBcIkFuIHVwZGF0ZSB0byBUaXBUYXBFZGl0b3IgaW5zaWRlIGEgdGVzdCB3YXMgbm90IHdyYXBwZWQgaW4gYWN0XCIsXG4gICAgICAgICAgICBcIkFuIHVwZGF0ZSB0byBUaGlua2luZ0luZGljYXRvciBpbnNpZGUgYSB0ZXN0IHdhcyBub3Qgd3JhcHBlZCBpbiBhY3RcIixcbiAgICAgICAgICAgIFwiVGhlIGN1cnJlbnQgdGVzdGluZyBlbnZpcm9ubWVudCBpcyBub3QgY29uZmlndXJlZCB0byBzdXBwb3J0IGFjdFwiLFxuICAgICAgICAgICAgXCJ0YXJnZXQuZ2V0Q2xpZW50UmVjdHMgaXMgbm90IGEgZnVuY3Rpb25cIixcbiAgICAgICAgICAgIFwicHJvc2VtaXJyb3JcIixcbiAgICAgICAgICBdLnNvbWUoKHRleHQpID0+IGxvZy5pbmNsdWRlcyh0ZXh0KSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIG9uVW5oYW5kbGVkUmVqZWN0aW9uKGVycikge1xuICAgICAgLy8gU3VwcHJlc3MgUHJvc2VNaXJyb3IgRE9NIGVycm9ycyBpbiB0ZXN0IGVudmlyb25tZW50XG4gICAgICBpZiAoXG4gICAgICAgIGVyci5tZXNzYWdlPy5pbmNsdWRlcyhcImdldENsaWVudFJlY3RzXCIpIHx8XG4gICAgICAgIGVyci5tZXNzYWdlPy5pbmNsdWRlcyhcInByb3NlbWlycm9yXCIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFTLHdCQUF3QjtBQUMzVSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsb0JBQW9CO0FBSjdCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLGlCQUFpQjtBQUFBLE1BQ2YsS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQTtBQUFBLElBR1gsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsT0FBTyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxRQUN0QyxjQUFjLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsTUFDdEQ7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLFNBQVMsQ0FBQyxPQUFPLFFBQVEsT0FBTyxVQUFVLFNBQVMsU0FBUztBQUFBLE1BQzVELGdCQUFnQixDQUFDLEtBQUssZ0JBQWdCLGVBQWU7QUFBQSxNQUNyRCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLGFBQWEsS0FBSyxNQUFNO0FBQ3RCLFVBQUksU0FBUyxVQUFVO0FBQ3JCLFlBQ0U7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRixFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxJQUFJLENBQUMsR0FDbkM7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLHFCQUFxQixLQUFLO0FBRXhCLFVBQ0UsSUFBSSxTQUFTLFNBQVMsZ0JBQWdCLEtBQ3RDLElBQUksU0FBUyxTQUFTLGFBQWEsR0FDbkM7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

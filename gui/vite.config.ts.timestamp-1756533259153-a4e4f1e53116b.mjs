// vite.config.ts
import { sentryVitePlugin } from "file:///C:/Users/julie/continue/continue/gui/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
import react from "file:///C:/Users/julie/continue/continue/gui/node_modules/@vitejs/plugin-react-swc/index.mjs";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqdWxpZVxcXFxjb250aW51ZVxcXFxjb250aW51ZVxcXFxndWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGp1bGllXFxcXGNvbnRpbnVlXFxcXGNvbnRpbnVlXFxcXGd1aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvanVsaWUvY29udGludWUvY29udGludWUvZ3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgc2VudHJ5Vml0ZVBsdWdpbiB9IGZyb20gXCJAc2VudHJ5L3ZpdGUtcGx1Z2luXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlc3QvY29uZmlnXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICB0YWlsd2luZGNzcygpLFxyXG4gICAgc2VudHJ5Vml0ZVBsdWdpbih7XHJcbiAgICAgIG9yZzogXCJjb250aW51ZS14ZFwiLFxyXG4gICAgICBwcm9qZWN0OiBcImNvbnRpbnVlXCIsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoZSBvdXRwdXQgLmpzIGZpbGVuYW1lIHRvIG5vdCBpbmNsdWRlIGEgaGFzaFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIGluZGV4OiByZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleC5odG1sXCIpLFxyXG4gICAgICAgIGluZGV4Q29uc29sZTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXhDb25zb2xlLmh0bWxcIiksXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5qc2AsXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLmpzYCxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uW2V4dF1gLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgY29yczoge1xyXG4gICAgICBvcmlnaW46IFwiKlwiLFxyXG4gICAgICBtZXRob2RzOiBbXCJHRVRcIiwgXCJQT1NUXCIsIFwiUFVUXCIsIFwiREVMRVRFXCIsIFwiUEFUQ0hcIiwgXCJPUFRJT05TXCJdLFxyXG4gICAgICBhbGxvd2VkSGVhZGVyczogW1wiKlwiLCBcIkNvbnRlbnQtVHlwZVwiLCBcIkF1dGhvcml6YXRpb25cIl0sXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxyXG4gICAgc2V0dXBGaWxlczogXCIuL3NyYy91dGlsL3Rlc3Qvc2V0dXBUZXN0cy50c1wiLFxyXG4gICAgb25Db25zb2xlTG9nKGxvZywgdHlwZSkge1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJzdGRlcnJcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAgXCJjb250ZW50RWRpdGFibGVcIixcclxuICAgICAgICAgICAgXCJBbiB1cGRhdGUgdG8gQ2hhdCBpbnNpZGUgYSB0ZXN0IHdhcyBub3Qgd3JhcHBlZCBpbiBhY3RcIixcclxuICAgICAgICAgICAgXCJBbiB1cGRhdGUgdG8gVGlwVGFwRWRpdG9yIGluc2lkZSBhIHRlc3Qgd2FzIG5vdCB3cmFwcGVkIGluIGFjdFwiLFxyXG4gICAgICAgICAgICBcIkFuIHVwZGF0ZSB0byBUaGlua2luZ0luZGljYXRvciBpbnNpZGUgYSB0ZXN0IHdhcyBub3Qgd3JhcHBlZCBpbiBhY3RcIixcclxuICAgICAgICAgICAgXCJUaGUgY3VycmVudCB0ZXN0aW5nIGVudmlyb25tZW50IGlzIG5vdCBjb25maWd1cmVkIHRvIHN1cHBvcnQgYWN0XCIsXHJcbiAgICAgICAgICAgIFwidGFyZ2V0LmdldENsaWVudFJlY3RzIGlzIG5vdCBhIGZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgIFwicHJvc2VtaXJyb3JcIixcclxuICAgICAgICAgIF0uc29tZSgodGV4dCkgPT4gbG9nLmluY2x1ZGVzKHRleHQpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBvblVuaGFuZGxlZFJlamVjdGlvbihlcnIpIHtcclxuICAgICAgLy8gU3VwcHJlc3MgUHJvc2VNaXJyb3IgRE9NIGVycm9ycyBpbiB0ZXN0IGVudmlyb25tZW50XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlcnIubWVzc2FnZT8uaW5jbHVkZXMoXCJnZXRDbGllbnRSZWN0c1wiKSB8fFxyXG4gICAgICAgIGVyci5tZXNzYWdlPy5pbmNsdWRlcyhcInByb3NlbWlycm9yXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBUyx3QkFBd0I7QUFDM1UsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLG9CQUFvQjtBQUo3QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixpQkFBaUI7QUFBQSxNQUNmLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUE7QUFBQSxJQUdYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDdEMsY0FBYyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLE1BQ3REO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsTUFDUixTQUFTLENBQUMsT0FBTyxRQUFRLE9BQU8sVUFBVSxTQUFTLFNBQVM7QUFBQSxNQUM1RCxnQkFBZ0IsQ0FBQyxLQUFLLGdCQUFnQixlQUFlO0FBQUEsTUFDckQsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixhQUFhLEtBQUssTUFBTTtBQUN0QixVQUFJLFNBQVMsVUFBVTtBQUNyQixZQUNFO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0YsRUFBRSxLQUFLLENBQUMsU0FBUyxJQUFJLFNBQVMsSUFBSSxDQUFDLEdBQ25DO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxxQkFBcUIsS0FBSztBQUV4QixVQUNFLElBQUksU0FBUyxTQUFTLGdCQUFnQixLQUN0QyxJQUFJLFNBQVMsU0FBUyxhQUFhLEdBQ25DO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    hookTimeout: 30000, // 30 secondes pour tous les hooks
    testTimeout: 30000, // timeout global pour chaque test
    testTransformMode: {
      web: ["/.[jt]s?$/"],
      ssr: ["/.[jt]s?$/"],
    },
    coverage: {
      provider: "v8", // ou 'istanbul'
      reporter: ["html", "lcov", "text"],
      reportsDirectory: "coverage", // par défaut
    },
    globalSetup: "./test/vitest.global-setup.ts",
    setupFiles: "./test/vitest.setup.ts",
    fileParallelism: false,
    include: ["**/*.vitest.ts"],
  },
});

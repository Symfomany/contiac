import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    hookTimeout: 30000, // 30 secondes pour tous les hooks
    testTimeout: 30000, // timeout global pour chaque test
    include: ["**/*.vitest.ts"],
    environment: "node",
    coverage: {
      provider: "v8", // ou 'istanbul'
      reporter: ["html", "lcov", "text"], // <-- "lcov" doit être inclus
      reportsDirectory: "coverage", // par défaut
    },
  },
});

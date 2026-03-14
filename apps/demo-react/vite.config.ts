import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@automotive/core": path.resolve(
                __dirname,
                "../../packages/core/src/index.ts",
            ),
            "@automotive/react": path.resolve(
                __dirname,
                "../../packages/react/src/index.ts",
            ),
            "@automotive/adapter-static": path.resolve(
                __dirname,
                "../../packages/adapter-static/src/index.ts",
            ),
        },
    },
});

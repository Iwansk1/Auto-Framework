module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Jaar4/automotive-framework/apps/demo/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/Jaar4_automotive-framework_d88aa880._.js",
  "chunks/[root-of-the-server]__e7b4f585._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Jaar4/automotive-framework/apps/demo/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];
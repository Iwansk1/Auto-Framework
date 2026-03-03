module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/Jaar4/automotive-framework/apps/demo/collections/Users.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
const Users = {
    slug: 'users',
    admin: {
        useAsTitle: 'email'
    },
    auth: true,
    fields: []
};
}),
"[project]/Jaar4/automotive-framework/apps/demo/collections/Media.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Media",
    ()=>Media
]);
const Media = {
    slug: 'media',
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true
        }
    ],
    upload: true
};
}),
"[project]/Jaar4/automotive-framework/apps/demo/collections/Vehicles.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Vehicles",
    ()=>Vehicles
]);
const Vehicles = {
    slug: "vehicles",
    admin: {
        useAsTitle: "model",
        defaultColumns: [
            "make",
            "model",
            "year",
            "category",
            "fuelType",
            "price"
        ]
    },
    access: {
        read: ()=>true
    },
    fields: [
        // ─── Basic Info ───────────────────────────────────────────────────────
        {
            name: "make",
            type: "text",
            required: true
        },
        {
            name: "model",
            type: "text",
            required: true
        },
        {
            name: "year",
            type: "number",
            required: true,
            min: 1900,
            max: 2100
        },
        {
            name: "price",
            type: "number",
            required: true,
            min: 0
        },
        {
            name: "category",
            type: "select",
            required: true,
            options: [
                {
                    label: "Sedan",
                    value: "sedan"
                },
                {
                    label: "SUV",
                    value: "suv"
                },
                {
                    label: "Hatchback",
                    value: "hatchback"
                },
                {
                    label: "Coupe",
                    value: "coupe"
                },
                {
                    label: "Stationwagen",
                    value: "stationwagen"
                },
                {
                    label: "MPV",
                    value: "mpv"
                }
            ]
        },
        {
            name: "fuelType",
            type: "select",
            required: true,
            options: [
                {
                    label: "Petrol",
                    value: "petrol"
                },
                {
                    label: "Diesel",
                    value: "diesel"
                },
                {
                    label: "Electric",
                    value: "electric"
                },
                {
                    label: "Hybrid",
                    value: "hybrid"
                }
            ]
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: false
        },
        {
            name: "features",
            type: "array",
            fields: [
                {
                    name: "feature",
                    type: "text",
                    required: true
                }
            ]
        },
        // ─── Specs ────────────────────────────────────────────────────────────
        {
            name: "specs",
            type: "group",
            fields: [
                {
                    name: "horsepower",
                    type: "number",
                    required: true,
                    min: 0
                },
                {
                    name: "torque",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: {
                        description: "Nm"
                    }
                },
                {
                    name: "acceleration",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: {
                        description: "0-100 km/h in seconds"
                    }
                },
                {
                    name: "topSpeed",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: {
                        description: "km/h"
                    }
                },
                {
                    name: "fuelEfficiency",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: {
                        description: "L/100km or kWh/100km for electric"
                    }
                },
                {
                    name: "range",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: {
                        description: "km"
                    }
                }
            ]
        }
    ]
};
}),
"[project]/Jaar4/automotive-framework/apps/demo/payload.config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__ = __turbopack_context__.i("[externals]/@payloadcms/db-sqlite [external] (@payloadcms/db-sqlite, esm_import, [project]/Jaar4/automotive-framework/node_modules/@payloadcms/db-sqlite)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/Jaar4/automotive-framework/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/collections/Users.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$collections$2f$Media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/collections/Media.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$collections$2f$Vehicles$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/collections/Vehicles.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Jaar4/automotive-framework/apps/demo/payload.config.ts")}`;
    }
};
;
;
;
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f$payload$29$__["buildConfig"])({
    admin: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Users"].slug,
        importMap: {
            baseDir: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname)
        }
    },
    collections: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$collections$2f$Users$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Users"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$collections$2f$Media$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Media"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$collections$2f$Vehicles$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Vehicles"]
    ],
    editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])(),
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
        outputFile: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, "payload-types.ts")
    },
    db: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__["sqliteAdapter"])({
        client: {
            url: process.env.DATABASE_URL || ""
        }
    }),
    plugins: []
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/Jaar4/automotive-framework/apps/demo/app/(payload)/api/[...slug]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */ /* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */ var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/payload.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export DELETE as REST_DELETE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export GET as REST_GET>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export OPTIONS as REST_OPTIONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export PATCH as REST_PATCH>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export POST as REST_POST>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/node_modules/@payloadcms/next/dist/routes/rest/index.js [app-route] (ecmascript) <export PUT as REST_PUT>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GET__as__REST_GET$3e$__["REST_GET"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__POST__as__REST_POST$3e$__["REST_POST"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const DELETE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__DELETE__as__REST_DELETE$3e$__["REST_DELETE"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const PATCH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PATCH__as__REST_PATCH$3e$__["REST_PATCH"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const PUT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__PUT__as__REST_PUT$3e$__["REST_PUT"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const OPTIONS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$routes$2f$rest$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OPTIONS__as__REST_OPTIONS$3e$__["REST_OPTIONS"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$payload$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69dbbb99._.js.map
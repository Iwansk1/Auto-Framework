(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/packages/react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/packages/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ComparePage() {
    _s();
    const { comparisonResult, selectedVehicles, setStrategy, activeStrategy, toggleVehicle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVehicleComparison"])();
    const availableStrategies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComparePage.useMemo[availableStrategies]": ()=>[
                new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceScoringStrategy"](),
                new __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EfficiencyScoringStrategy"]()
            ]
    }["ComparePage.useMemo[availableStrategies]"], []);
    if (selectedVehicles.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "96px 24px",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: "64px",
                        marginBottom: "24px"
                    },
                    children: "🏎️"
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: "32px",
                        color: "var(--color-text)",
                        marginBottom: "12px"
                    },
                    children: "No vehicles selected"
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--color-muted)",
                        marginBottom: "32px",
                        fontSize: "15px"
                    },
                    children: "Go back to the catalogue and select up to 3 vehicles to compare"
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        display: "inline-block",
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-carbon)",
                        padding: "12px 28px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase"
                    },
                    children: "Browse Vehicles"
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--color-accent)",
                            fontWeight: 600,
                            marginBottom: "12px"
                        },
                        children: "Comparison"
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "clamp(32px, 4vw, 52px)",
                            lineHeight: 1,
                            color: "var(--color-text)",
                            margin: "0 0 16px 0"
                        },
                        children: "Head to Head"
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--color-muted)",
                            fontSize: "15px"
                        },
                        children: [
                            "Comparing ",
                            selectedVehicles.length,
                            " vehicle",
                            selectedVehicles.length > 1 ? "s" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "8px",
                    marginBottom: "32px"
                },
                role: "group",
                "aria-label": "Scoring strategy",
                children: availableStrategies.map((strategy)=>{
                    const isActive = strategy.name === activeStrategy.name;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStrategy(strategy),
                        "aria-pressed": isActive,
                        style: {
                            padding: "10px 24px",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            borderRadius: "8px",
                            border: isActive ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                            backgroundColor: isActive ? "var(--color-accent)" : "transparent",
                            color: isActive ? "var(--color-carbon)" : "var(--color-muted)",
                            cursor: "pointer",
                            transition: "all 0.2s"
                        },
                        children: strategy.name
                    }, strategy.name, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                        lineNumber: 131,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            comparisonResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: "var(--color-panel)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "16px",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "40px 1fr 80px 80px 80px 100px 80px 100px",
                            gap: "16px",
                            padding: "12px 24px",
                            backgroundColor: "var(--color-surface)",
                            borderBottom: "1px solid var(--color-border)"
                        },
                        children: [
                            "#",
                            "Vehicle",
                            "Score",
                            "Power",
                            "0–100",
                            "Consumption",
                            "Range",
                            "Price"
                        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "var(--color-muted)"
                                },
                                children: col
                            }, col, false, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                lineNumber: 193,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this),
                    comparisonResult.scoredVehicles.map(({ vehicle, score, rank }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "40px 1fr 80px 80px 80px 100px 80px 100px",
                                gap: "16px",
                                padding: "20px 24px",
                                alignItems: "center",
                                borderBottom: index < comparisonResult.scoredVehicles.length - 1 ? "1px solid var(--color-border)" : "none",
                                backgroundColor: rank === 1 ? "var(--color-accent-dim)" : "transparent"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        color: rank === 1 ? "var(--color-accent)" : "var(--color-muted)"
                                    },
                                    children: [
                                        "#",
                                        rank
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "var(--font-display)",
                                                fontSize: "18px",
                                                fontWeight: 700,
                                                color: "var(--color-text)",
                                                margin: "0 0 2px 0"
                                            },
                                            children: [
                                                vehicle.make,
                                                " ",
                                                vehicle.model
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "12px",
                                                color: "var(--color-muted)",
                                                margin: 0,
                                                textTransform: "capitalize"
                                            },
                                            children: [
                                                vehicle.year,
                                                " · ",
                                                vehicle.fuelType
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        fontFamily: "var(--font-display)",
                                        color: "var(--color-accent)"
                                    },
                                    children: score.toFixed(1)
                                }, void 0, false, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "14px",
                                        color: "var(--color-text)"
                                    },
                                    children: [
                                        vehicle.specs.horsepower,
                                        " hp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "14px",
                                        color: "var(--color-text)"
                                    },
                                    children: [
                                        vehicle.specs.acceleration,
                                        "s"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "14px",
                                        color: "var(--color-text)"
                                    },
                                    children: [
                                        vehicle.specs.fuelEfficiency,
                                        " L/100km"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "14px",
                                        color: "var(--color-text)"
                                    },
                                    children: [
                                        vehicle.specs.range,
                                        " km"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "14px",
                                        color: "var(--color-text)"
                                    },
                                    children: new Intl.NumberFormat("nl-NL", {
                                        style: "currency",
                                        currency: "EUR",
                                        maximumFractionDigits: 0
                                    }).format(vehicle.price)
                                }, void 0, false, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, vehicle.id, true, {
                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                            lineNumber: 211,
                            columnNumber: 29
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                lineNumber: 163,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px"
                },
                children: selectedVehicles.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleVehicle(vehicle),
                        style: {
                            fontSize: "12px",
                            color: "var(--color-muted)",
                            border: "1px solid var(--color-border)",
                            backgroundColor: "transparent",
                            padding: "6px 14px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.2s"
                        },
                        "aria-label": `Remove ${vehicle.make} ${vehicle.model} from comparison`,
                        children: [
                            "Remove ",
                            vehicle.make,
                            " ",
                            vehicle.model,
                            " ✕"
                        ]
                    }, vehicle.id, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                        lineNumber: 344,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                lineNumber: 335,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "16px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        fontSize: "13px",
                        color: "var(--color-muted)",
                        textDecoration: "none"
                    },
                    children: "← Back to catalogue"
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                    lineNumber: 365,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
                lineNumber: 364,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/compare/page.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(ComparePage, "xApYyWT3plgQvFfmpmRmGr3txSs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVehicleComparison"]
    ];
});
_c = ComparePage;
var _c;
__turbopack_context__.k.register(_c, "ComparePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Jaar4_automotive-framework_apps_demo_app_%28app%29_compare_page_tsx_f74110dd._.js.map
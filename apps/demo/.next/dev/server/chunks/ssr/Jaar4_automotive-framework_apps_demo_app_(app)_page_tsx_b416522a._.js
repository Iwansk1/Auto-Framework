module.exports = [
"[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/packages/react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function HomePage() {
    const { vehicles, isSelected, canAddMore, toggleVehicle, selectedVehicles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVehicleComparison"])();
    const fuelTypeColor = {
        electric: "#34d399",
        hybrid: "#60a5fa",
        petrol: "#f0a500",
        diesel: "#a78bfa"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "48px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--color-accent)",
                            fontWeight: 600,
                            marginBottom: "12px"
                        },
                        children: "Vehicle Catalogue"
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "clamp(36px, 5vw, 64px)",
                            lineHeight: 1,
                            color: "var(--color-text)",
                            margin: "0 0 16px 0"
                        },
                        children: [
                            "Find Your",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--color-accent)"
                                },
                                children: "Perfect Drive"
                            }, void 0, false, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--color-muted)",
                            fontSize: "15px",
                            fontWeight: 300
                        },
                        children: "Select up to 3 vehicles to compare side by side"
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            selectedVehicles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                style: {
                    marginBottom: "32px",
                    padding: "16px 24px",
                    backgroundColor: "var(--color-accent-dim)",
                    border: "1px solid var(--color-accent)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "14px",
                            color: "var(--color-accent)",
                            fontWeight: 500,
                            margin: 0
                        },
                        children: [
                            selectedVehicles.length,
                            " vehicle",
                            selectedVehicles.length > 1 ? "s" : "",
                            " selected"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                        lineNumber: 88,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/compare",
                        style: {
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "var(--color-carbon)",
                            backgroundColor: "var(--color-accent)",
                            padding: "8px 20px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            transition: "opacity 0.2s"
                        },
                        children: "Compare Now →"
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                        lineNumber: 99,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "24px"
                },
                role: "list",
                "aria-label": "Available vehicles",
                children: vehicles.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "listitem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VehicleCard"], {
                            vehicle: vehicle,
                            isSelected: isSelected(vehicle.id),
                            canSelect: canAddMore,
                            onToggle: toggleVehicle,
                            className: "",
                            renderImage: (v)=>v.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        height: "180px",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginBottom: "16px",
                                        backgroundColor: "var(--color-surface)",
                                        position: "relative"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: v.imageUrl,
                                        alt: `${v.make} ${v.model} ${v.year}`,
                                        fill: true,
                                        style: {
                                            objectFit: "cover"
                                        },
                                        sizes: "(max-width: 768px) 100vw, 33vw"
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 41
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 37
                                }, void 0) : null,
                            renderBadge: (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "8px",
                                        marginBottom: "16px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "11px",
                                                fontWeight: 600,
                                                letterSpacing: "0.08em",
                                                textTransform: "uppercase",
                                                padding: "4px 10px",
                                                borderRadius: "4px",
                                                backgroundColor: `${fuelTypeColor[v.fuelType]}18`,
                                                color: fuelTypeColor[v.fuelType],
                                                border: `1px solid ${fuelTypeColor[v.fuelType]}40`
                                            },
                                            children: v.fuelType
                                        }, void 0, false, {
                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 37
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "11px",
                                                fontWeight: 600,
                                                letterSpacing: "0.08em",
                                                textTransform: "uppercase",
                                                padding: "4px 10px",
                                                borderRadius: "4px",
                                                backgroundColor: "var(--color-panel)",
                                                color: "var(--color-muted)",
                                                border: "1px solid var(--color-border)"
                                            },
                                            children: v.category
                                        }, void 0, false, {
                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 37
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 33
                                }, void 0),
                            renderActions: (v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "8px",
                                        marginTop: "16px",
                                        paddingTop: "16px",
                                        borderTop: "1px solid var(--color-border)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleVehicle(v),
                                            disabled: !canAddMore && !isSelected(v.id),
                                            style: {
                                                flex: 1,
                                                padding: "10px",
                                                fontSize: "12px",
                                                fontWeight: 700,
                                                letterSpacing: "0.06em",
                                                textTransform: "uppercase",
                                                borderRadius: "8px",
                                                border: isSelected(v.id) ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                                                backgroundColor: isSelected(v.id) ? "var(--color-accent-dim)" : "transparent",
                                                color: isSelected(v.id) ? "var(--color-accent)" : "var(--color-muted)",
                                                cursor: !canAddMore && !isSelected(v.id) ? "not-allowed" : "pointer",
                                                opacity: !canAddMore && !isSelected(v.id) ? 0.4 : 1,
                                                transition: "all 0.2s"
                                            },
                                            "aria-pressed": isSelected(v.id),
                                            "aria-label": isSelected(v.id) ? `Remove ${v.make} ${v.model} from comparison` : `Add ${v.make} ${v.model} to comparison`,
                                            children: isSelected(v.id) ? "✓ Selected" : "+ Compare"
                                        }, void 0, false, {
                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 37
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/configure/${v.id}`,
                                            style: {
                                                flex: 1,
                                                padding: "10px",
                                                fontSize: "12px",
                                                fontWeight: 700,
                                                letterSpacing: "0.06em",
                                                textTransform: "uppercase",
                                                borderRadius: "8px",
                                                border: "1px solid var(--color-accent)",
                                                backgroundColor: "var(--color-accent)",
                                                color: "var(--color-carbon)",
                                                textDecoration: "none",
                                                textAlign: "center",
                                                transition: "opacity 0.2s"
                                            },
                                            children: "Configure"
                                        }, void 0, false, {
                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 37
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 33
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                            lineNumber: 132,
                            columnNumber: 25
                        }, this)
                    }, vehicle.id, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/page.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Jaar4_automotive-framework_apps_demo_app_%28app%29_page_tsx_b416522a._.js.map
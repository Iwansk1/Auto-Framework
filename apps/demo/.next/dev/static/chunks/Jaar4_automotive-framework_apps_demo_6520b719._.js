(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Jaar4/automotive-framework/apps/demo/data/vehicles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "vehicles",
    ()=>vehicles
]);
const vehicles = [
    {
        id: "1",
        make: "BMW",
        model: "M3 Competition",
        year: 2024,
        price: 97000,
        category: "sedan",
        fuelType: "petrol",
        specs: {
            horsepower: 510,
            torque: 650,
            acceleration: 3.9,
            topSpeed: 290,
            fuelEfficiency: 10.4,
            range: 480
        },
        features: [
            "Carbon roof",
            "M seats",
            "Adaptive suspension",
            "Harman Kardon audio"
        ],
        imageUrl: "https://images.unsplash.com/photo-1622244588672-9290bf3cb1f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "2",
        make: "Tesla",
        model: "Model 3 Long Range",
        year: 2024,
        price: 52990,
        category: "sedan",
        fuelType: "electric",
        specs: {
            horsepower: 358,
            torque: 493,
            acceleration: 4.4,
            topSpeed: 233,
            fuelEfficiency: 14.9,
            range: 629
        },
        features: [
            "Autopilot",
            "Glass roof",
            "Over-the-air updates",
            "Minimalist interior"
        ],
        imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop"
    },
    {
        id: "3",
        make: "Volkswagen",
        model: "Golf GTI",
        year: 2024,
        price: 43500,
        category: "hatchback",
        fuelType: "petrol",
        specs: {
            horsepower: 265,
            torque: 350,
            acceleration: 6.3,
            topSpeed: 250,
            fuelEfficiency: 7.1,
            range: 550
        },
        features: [
            "DCC adaptive chassis",
            "Harman Kardon audio",
            "Digital cockpit",
            "Sport seats"
        ],
        imageUrl: "https://images.unsplash.com/photo-1573502721625-c482d1bc3935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHZ3JTIwZ29sZiUyMGd0aXxlbnwwfHwwfHx8Mg%3D%3D"
    },
    {
        id: "4",
        make: "Volvo",
        model: "XC60 Recharge",
        year: 2024,
        price: 68000,
        category: "suv",
        fuelType: "hybrid",
        specs: {
            horsepower: 455,
            torque: 709,
            acceleration: 4.9,
            topSpeed: 180,
            fuelEfficiency: 2.4,
            range: 720
        },
        features: [
            "Pilot Assist",
            "Bowers & Wilkins audio",
            "Air suspension",
            "360 camera"
        ],
        imageUrl: "https://images.unsplash.com/photo-1557323137-bd6bd20fe022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Vm9sdm8lMjBYQzYwfGVufDB8fDB8fHwy"
    },
    {
        id: "5",
        make: "Renault",
        model: "Megane E-Tech",
        year: 2024,
        price: 38500,
        category: "hatchback",
        fuelType: "electric",
        specs: {
            horsepower: 220,
            torque: 300,
            acceleration: 7.4,
            topSpeed: 160,
            fuelEfficiency: 15.2,
            range: 450
        },
        features: [
            "OpenR display",
            "Google built-in",
            "V2G charging",
            "Adaptive cruise"
        ],
        imageUrl: "https://images.unsplash.com/photo-1669881241841-8342fd0d465a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVuYXVsdCUyME1lZ2FuZXxlbnwwfHwwfHx8Mg%3D%3D"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfigurePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/packages/react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$data$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/data/vehicles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ConfigurePage({ params }) {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const vehicle = __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$data$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicles"].find((v)=>v.id === id);
    const { configuration, startConfiguration, selectColor, selectWheels, togglePackage, isColorSelected, isWheelsSelected, isPackageSelected, formattedPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfigurator"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfigurePage.useEffect": ()=>{
            if (vehicle && (!configuration || configuration.vehicle.id !== vehicle.id)) {
                startConfiguration(vehicle);
            }
        }
    }["ConfigurePage.useEffect"], [
        vehicle
    ]);
    if (!vehicle) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "96px 24px",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        color: "var(--color-text)",
                        marginBottom: "16px"
                    },
                    children: "Vehicle not found"
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        color: "var(--color-accent)"
                    },
                    children: "Back to catalogue"
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this);
    }
    if (!configuration) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "96px 24px",
                textAlign: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--color-muted)"
                },
                children: "Loading configurator..."
            }, void 0, false, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                lineNumber: 68,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, this);
    }
    const colors = [
        {
            id: "black",
            name: "Midnight Black",
            hex: "#1a1a1a",
            priceModifier: 0
        },
        {
            id: "white",
            name: "Alpine White",
            hex: "#f5f5f5",
            priceModifier: 0
        },
        {
            id: "blue",
            name: "Portimao Blue",
            hex: "#2d4a7a",
            priceModifier: 750
        },
        {
            id: "red",
            name: "Melbourne Red",
            hex: "#c0392b",
            priceModifier: 750
        },
        {
            id: "green",
            name: "Isle of Man Green",
            hex: "#2d6a4f",
            priceModifier: 1200
        }
    ];
    const wheels = [
        {
            id: "standard",
            name: 'Standard 18"',
            sizeInch: 18,
            priceModifier: 0
        },
        {
            id: "sport",
            name: 'Sport 19"',
            sizeInch: 19,
            priceModifier: 800
        },
        {
            id: "performance",
            name: 'Performance 20"',
            sizeInch: 20,
            priceModifier: 1500
        }
    ];
    const packages = [
        {
            id: "comfort",
            name: "Comfort Package",
            description: "Enhanced comfort for long journeys",
            features: [
                "Heated seats",
                "Heated steering wheel",
                "Parking sensors"
            ],
            priceModifier: 1800
        },
        {
            id: "technology",
            name: "Technology Package",
            description: "Latest driver assistance systems",
            features: [
                "Lane assist",
                "Blind spot detection",
                "Head-up display"
            ],
            priceModifier: 2400
        },
        {
            id: "sport",
            name: "Sport Package",
            description: "Track-focused upgrades",
            features: [
                "Sport exhaust",
                "Carbon trim",
                "Sport suspension"
            ],
            priceModifier: 3200
        }
    ];
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            fontSize: "13px",
                            color: "var(--color-muted)",
                            textDecoration: "none",
                            display: "inline-block",
                            marginBottom: "16px"
                        },
                        children: "← Back to catalogue"
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--color-accent)",
                            fontWeight: 600,
                            marginBottom: "12px"
                        },
                        children: "Configurator"
                    }, void 0, false, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "clamp(32px, 4vw, 52px)",
                            lineHeight: 1,
                            color: "var(--color-text)",
                            margin: 0
                        },
                        children: [
                            vehicle.make,
                            " ",
                            vehicle.model
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 340px",
                    gap: "32px",
                    alignItems: "start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    backgroundColor: "var(--color-panel)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "16px",
                                    padding: "28px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "18px",
                                            color: "var(--color-text)",
                                            marginBottom: "20px",
                                            marginTop: 0
                                        },
                                        children: "color"
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "12px",
                                            flexWrap: "wrap"
                                        },
                                        children: colors.map((color)=>{
                                            const selected = isColorSelected(color.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>selectColor(color.id),
                                                role: "radio",
                                                "aria-checked": selected,
                                                "aria-label": `${color.name}${color.priceModifier > 0 ? ` +€${color.priceModifier}` : " included"}`,
                                                title: color.name,
                                                style: {
                                                    width: "48px",
                                                    height: "48px",
                                                    borderRadius: "50%",
                                                    backgroundColor: color.hex,
                                                    border: selected ? "3px solid var(--color-accent)" : "3px solid transparent",
                                                    outline: selected ? "2px solid var(--color-accent)" : "2px solid var(--color-border)",
                                                    outlineOffset: "2px",
                                                    cursor: "pointer",
                                                    transition: "all 0.2s"
                                                }
                                            }, color.id, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 25
                                    }, this),
                                    configuration.selectedColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginTop: "12px",
                                            fontSize: "13px",
                                            color: "var(--color-muted)"
                                        },
                                        children: [
                                            "Selected:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "var(--color-text)"
                                                },
                                                children: configuration.selectedColor.name
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 33
                                            }, this),
                                            configuration.selectedColor.priceModifier > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "var(--color-accent)",
                                                    marginLeft: "8px"
                                                },
                                                children: [
                                                    "+€",
                                                    configuration.selectedColor.priceModifier.toLocaleString("nl-NL")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    backgroundColor: "var(--color-panel)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "16px",
                                    padding: "28px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "18px",
                                            color: "var(--color-text)",
                                            marginBottom: "20px",
                                            marginTop: 0
                                        },
                                        children: "Wheels"
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        },
                                        children: wheels.map((wheel)=>{
                                            const selected = isWheelsSelected(wheel.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>selectWheels(wheel.id),
                                                role: "radio",
                                                "aria-checked": selected,
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    padding: "14px 18px",
                                                    borderRadius: "10px",
                                                    border: selected ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                                                    backgroundColor: selected ? "var(--color-accent-dim)" : "var(--color-surface)",
                                                    cursor: "pointer",
                                                    transition: "all 0.2s",
                                                    textAlign: "left"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "14px",
                                                            fontWeight: 500,
                                                            color: selected ? "var(--color-accent)" : "var(--color-text)"
                                                        },
                                                        children: wheel.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "13px",
                                                            color: wheel.priceModifier > 0 ? "var(--color-accent)" : "var(--color-muted)"
                                                        },
                                                        children: wheel.priceModifier > 0 ? `+€${wheel.priceModifier.toLocaleString("nl-NL")}` : "Included"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, wheel.id, true, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                lineNumber: 299,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    backgroundColor: "var(--color-panel)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "16px",
                                    padding: "28px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "18px",
                                            color: "var(--color-text)",
                                            marginBottom: "20px",
                                            marginTop: 0
                                        },
                                        children: "Packages"
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        },
                                        children: packages.map((pkg)=>{
                                            const selected = isPackageSelected(pkg.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>togglePackage(pkg.id),
                                                role: "checkbox",
                                                "aria-checked": selected,
                                                style: {
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "14px",
                                                    padding: "16px 18px",
                                                    borderRadius: "10px",
                                                    border: selected ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                                                    backgroundColor: selected ? "var(--color-accent-dim)" : "var(--color-surface)",
                                                    cursor: "pointer",
                                                    transition: "all 0.2s",
                                                    textAlign: "left"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "4px",
                                                            border: selected ? "2px solid var(--color-accent)" : "2px solid var(--color-border)",
                                                            backgroundColor: selected ? "var(--color-accent)" : "transparent",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            flexShrink: 0,
                                                            marginTop: "2px",
                                                            transition: "all 0.2s",
                                                            color: "var(--color-carbon)",
                                                            fontSize: "12px",
                                                            fontWeight: 700
                                                        },
                                                        children: selected ? "✓" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    justifyContent: "space-between",
                                                                    marginBottom: "4px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "14px",
                                                                            fontWeight: 600,
                                                                            color: selected ? "var(--color-accent)" : "var(--color-text)"
                                                                        },
                                                                        children: pkg.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "13px",
                                                                            color: "var(--color-accent)"
                                                                        },
                                                                        children: [
                                                                            "+€",
                                                                            pkg.priceModifier.toLocaleString("nl-NL")
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: "12px",
                                                                    color: "var(--color-muted)",
                                                                    margin: "0 0 8px 0"
                                                                },
                                                                children: pkg.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                                lineNumber: 488,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                style: {
                                                                    margin: 0,
                                                                    padding: 0,
                                                                    listStyle: "none",
                                                                    display: "flex",
                                                                    flexWrap: "wrap",
                                                                    gap: "6px"
                                                                },
                                                                children: pkg.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        style: {
                                                                            fontSize: "11px",
                                                                            color: "var(--color-muted)",
                                                                            backgroundColor: "var(--color-panel)",
                                                                            border: "1px solid var(--color-border)",
                                                                            padding: "2px 8px",
                                                                            borderRadius: "4px"
                                                                        },
                                                                        children: feature
                                                                    }, feature, false, {
                                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                                        lineNumber: 508,
                                                                        columnNumber: 53
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                                lineNumber: 497,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, pkg.id, true, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                lineNumber: 380,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        "aria-label": "Configuration summary",
                        style: {
                            backgroundColor: "var(--color-panel)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "16px",
                            padding: "28px",
                            position: "sticky",
                            top: "88px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "16px",
                                    color: "var(--color-text)",
                                    marginBottom: "24px",
                                    marginTop: 0,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    fontWeight: 600
                                },
                                children: "Summary"
                            }, void 0, false, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                lineNumber: 544,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                style: {
                                    margin: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "14px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: "var(--color-muted)"
                                                },
                                                children: "Base price"
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 572,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                style: {
                                                    fontSize: "13px",
                                                    fontWeight: 500,
                                                    color: "var(--color-text)",
                                                    margin: 0
                                                },
                                                children: new Intl.NumberFormat("nl-NL", {
                                                    style: "currency",
                                                    currency: "EUR",
                                                    maximumFractionDigits: 0
                                                }).format(vehicle.price)
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 580,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 25
                                    }, this),
                                    configuration.selectedColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: "var(--color-muted)"
                                                },
                                                children: "color"
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                style: {
                                                    fontSize: "13px",
                                                    fontWeight: 500,
                                                    color: "var(--color-text)",
                                                    margin: 0
                                                },
                                                children: [
                                                    configuration.selectedColor.name,
                                                    configuration.selectedColor.priceModifier > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--color-accent)",
                                                            marginLeft: "6px"
                                                        },
                                                        children: [
                                                            "+€",
                                                            configuration.selectedColor.priceModifier.toLocaleString("nl-NL")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 597,
                                        columnNumber: 29
                                    }, this),
                                    configuration.selectedWheels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: "var(--color-muted)"
                                                },
                                                children: "Wheels"
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 645,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                style: {
                                                    fontSize: "13px",
                                                    fontWeight: 500,
                                                    color: "var(--color-text)",
                                                    margin: 0
                                                },
                                                children: [
                                                    configuration.selectedWheels.name,
                                                    configuration.selectedWheels.priceModifier > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--color-accent)",
                                                            marginLeft: "6px"
                                                        },
                                                        children: [
                                                            "+€",
                                                            configuration.selectedWheels.priceModifier.toLocaleString("nl-NL")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 653,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 29
                                    }, this),
                                    configuration.selectedPackages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: "var(--color-muted)",
                                                    marginBottom: "8px"
                                                },
                                                children: "Packages"
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 682,
                                                columnNumber: 33
                                            }, this),
                                            configuration.selectedPackages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        fontSize: "13px",
                                                        fontWeight: 500,
                                                        color: "var(--color-text)",
                                                        margin: "0 0 4px 0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: pkg.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                            lineNumber: 703,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--color-accent)"
                                                            },
                                                            children: [
                                                                "+€",
                                                                pkg.priceModifier.toLocaleString("nl-NL")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, pkg.id, true, {
                                                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 681,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderTop: "1px solid var(--color-border)",
                                            paddingTop: "14px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                style: {
                                                    fontFamily: "var(--font-display)",
                                                    fontSize: "16px",
                                                    fontWeight: 700,
                                                    color: "var(--color-text)"
                                                },
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 729,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                style: {
                                                    fontFamily: "var(--font-display)",
                                                    fontSize: "24px",
                                                    fontWeight: 700,
                                                    color: "var(--color-accent)",
                                                    margin: 0
                                                },
                                                "aria-live": "polite",
                                                "aria-label": `Total price ${formattedPrice}`,
                                                children: formattedPrice
                                            }, void 0, false, {
                                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                                lineNumber: 739,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                        lineNumber: 720,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                                lineNumber: 558,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                        lineNumber: 533,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/configure/[id]/page.tsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
_s(ConfigurePage, "4SQLB9J7iOs7ldwGKDsJIUjrxfw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfigurator"]
    ];
});
_c = ConfigurePage;
var _c;
__turbopack_context__.k.register(_c, "ConfigurePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Jaar4_automotive-framework_apps_demo_6520b719._.js.map
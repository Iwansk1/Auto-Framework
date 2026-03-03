(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Jaar4/automotive-framework/packages/core/dist/models/Vehicle.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=Vehicle.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/core/dist/models/Configuration.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=Configuration.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/core/dist/strategies/ScoringStrategy.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=ScoringStrategy.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/core/dist/strategies/PerformanceScoringStrategy.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PerformanceScoringStrategy = void 0;
class PerformanceScoringStrategy {
    constructor(){
        this.name = "Performance";
        this.description = "Scores vehicles based on power, acceleration and top speed";
    }
    score(vehicle) {
        const { horsepower, acceleration, topSpeed } = vehicle.specs;
        // Normalize the values to 0-100 range
        const horsepowerScore = Math.min(horsepower / 500 * 100, 100);
        const accelerationScore = Math.max(100 - acceleration / 10 * 100, 0);
        const topSpeedScore = Math.min(topSpeed / 300 * 100, 100);
        return horsepowerScore * 0.35 + accelerationScore * 0.4 + topSpeedScore * 0.25;
    }
}
exports.PerformanceScoringStrategy = PerformanceScoringStrategy; //# sourceMappingURL=PerformanceScoringStrategy.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/core/dist/strategies/EfficiencyScoringStrategy.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EfficiencyScoringStrategy = void 0;
class EfficiencyScoringStrategy {
    constructor(){
        this.name = "Efficiency";
        this.description = "Scores vehicles based on fuel consumption and range";
    }
    score(vehicle) {
        const { fuelEfficiency, range } = vehicle.specs;
        // For L/100km: lower is better, reference is 12L/100km
        const efficiencyScore = Math.max(100 - fuelEfficiency / 12 * 100, 0);
        // For range: higher is better, reference is 800km
        const rangeScore = Math.min(range / 800 * 100, 100);
        return efficiencyScore * 0.6 + rangeScore * 0.4;
    }
}
exports.EfficiencyScoringStrategy = EfficiencyScoringStrategy; //# sourceMappingURL=EfficiencyScoringStrategy.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/core/dist/services/ComparisonService.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComparisonService = void 0;
class ComparisonService {
    constructor(strategy){
        this.strategy = strategy;
    }
    // Swap strategies at runtime
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    getStrategy() {
        return this.strategy;
    }
    compare(vehicles) {
        if (vehicles.length === 0) {
            return {
                scoredVehicles: [],
                strategyName: this.strategy.name,
                strategyDescription: this.strategy.description
            };
        }
        const scored = vehicles.map((vehicle)=>({
                vehicle,
                score: Math.round(this.strategy.score(vehicle) * 10) / 10
            })).sort((a, b)=>b.score - a.score).map((item, index)=>({
                ...item,
                rank: index + 1
            }));
        return {
            scoredVehicles: scored,
            strategyName: this.strategy.name,
            strategyDescription: this.strategy.description
        };
    }
}
exports.ComparisonService = ComparisonService; //# sourceMappingURL=ComparisonService.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/core/dist/services/ConfiguratorService.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConfiguratorService = void 0;
class ConfiguratorService {
    constructor(options){
        this.options = options;
    }
    createConfiguration(vehicle) {
        return {
            vehicle,
            selectedColor: null,
            selectedWheels: null,
            selectedPackages: [],
            totalPrice: vehicle.price
        };
    }
    // Each method returns a NEW config - never mutate
    selectColor(config, colorId) {
        const color = this.options.colors.find((c)=>c.id === colorId) ?? null;
        return this.recalculate({
            ...config,
            selectedColor: color
        });
    }
    selectWheels(config, wheelId) {
        const wheels = this.options.wheels.find((w)=>w.id === wheelId) ?? null;
        return this.recalculate({
            ...config,
            selectedWheels: wheels
        });
    }
    togglePackage(config, packageId) {
        const pkg = this.options.packages.find((p)=>p.id === packageId);
        if (!pkg) return config; // No change if package not found
        const alreadySelected = config.selectedPackages.some((p)=>p.id === packageId);
        const selectedPackages = alreadySelected ? config.selectedPackages.filter((p)=>p.id !== packageId) // Remove if already selected
         : [
            ...config.selectedPackages,
            pkg
        ]; // Add if not selected
        return this.recalculate({
            ...config,
            selectedPackages
        });
    }
    getOptions() {
        return this.options;
    }
    recalculate(config) {
        const colorPrice = config.selectedColor?.priceModifier ?? 0;
        const wheelPrice = config.selectedWheels?.priceModifier ?? 0;
        const packagePrice = config.selectedPackages.reduce((sum, pkg)=>sum + pkg.priceModifier, 0);
        return {
            ...config,
            totalPrice: config.vehicle.price + colorPrice + wheelPrice + packagePrice
        };
    }
}
exports.ConfiguratorService = ConfiguratorService; //# sourceMappingURL=ConfiguratorService.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/core/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// Models
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/models/Vehicle.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/models/Configuration.js [app-client] (ecmascript)"), exports);
// Strategies
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/strategies/ScoringStrategy.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/strategies/PerformanceScoringStrategy.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/strategies/EfficiencyScoringStrategy.js [app-client] (ecmascript)"), exports);
// Services
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/services/ComparisonService.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/services/ConfiguratorService.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/react/dist/context/VehicleContext.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VehicleProvider = VehicleProvider;
exports.useVehicleContext = useVehicleContext;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const react_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const core_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/core/dist/index.js [app-client] (ecmascript)");
const VehicleContext = (0, react_1.createContext)(null);
const defaultConfigurationOptions = {
    colors: [
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            priceModifier: 0
        },
        {
            id: "white",
            name: "White",
            hex: "#FFFFFF",
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
    ],
    wheels: [
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
    ],
    packages: [
        {
            id: "comfort",
            name: "Comfort Package",
            description: "Enhanced comfort for long journeys.",
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
    ]
};
function VehicleProvider({ children, vehicles, configurationOptions = defaultConfigurationOptions }) {
    // Strategies
    const performanceStrategy = (0, react_1.useMemo)(()=>new core_1.PerformanceScoringStrategy(), []);
    const efficiencyStrategy = (0, react_1.useMemo)(()=>new core_1.EfficiencyScoringStrategy(), []);
    // Services
    const comparisonService = (0, react_1.useMemo)(()=>new core_1.ComparisonService(performanceStrategy), [
        performanceStrategy
    ]);
    const configuratorService = (0, react_1.useMemo)(()=>new core_1.ConfiguratorService(configurationOptions), [
        configurationOptions
    ]);
    // State
    const [activeStrategy, setActiveStrategy] = (0, react_1.useState)(performanceStrategy);
    const [selectedVehicles, setSelectedVehicles] = (0, react_1.useState)([]);
    const [comparisonResult, setComparisonResult] = (0, react_1.useState)(null);
    const [configuration, setConfiguration] = (0, react_1.useState)(null);
    // Comparison handlers
    const selectVehicleForComparison = (vehicle)=>{
        const updated = [
            ...selectedVehicles,
            vehicle
        ];
        setSelectedVehicles(updated);
        setComparisonResult(comparisonService.compare(updated));
    };
    const removeVehicleFromComparison = (vehicleId)=>{
        const updated = selectedVehicles.filter((v)=>v.id !== vehicleId);
        setSelectedVehicles(updated);
        setComparisonResult(updated.length > 0 ? comparisonService.compare(updated) : null);
    };
    const setStrategy = (strategy)=>{
        comparisonService.setStrategy(strategy);
        setActiveStrategy(strategy);
        if (selectedVehicles.length > 0) {
            setComparisonResult(comparisonService.compare(selectedVehicles));
        }
    };
    // Configurator handlers
    const startConfiguration = (vehicle)=>{
        setConfiguration(configuratorService.createConfiguration(vehicle));
    };
    const selectColor = (colorId)=>{
        if (!configuration) return;
        setConfiguration(configuratorService.selectColor(configuration, colorId));
    };
    const selectWheels = (wheelId)=>{
        if (!configuration) return;
        setConfiguration(configuratorService.selectWheels(configuration, wheelId));
    };
    const togglePackage = (packageId)=>{
        if (!configuration) return;
        setConfiguration(configuratorService.togglePackage(configuration, packageId));
    };
    // Context value
    const value = (0, react_1.useMemo)(()=>({
            vehicles,
            selectedVehicles,
            comparisonResult,
            activeStrategy,
            selectVehicleForComparison,
            removeVehicleFromComparison,
            setStrategy,
            configuration,
            startConfiguration,
            selectColor,
            selectWheels,
            togglePackage
        }), [
        vehicles,
        selectedVehicles,
        comparisonResult,
        activeStrategy,
        configuration
    ]);
    return (0, jsx_runtime_1.jsx)(VehicleContext.Provider, {
        value: value,
        children: children
    });
}
// ─── Consumer hook ────────────────────────────────────────────────────────────
function useVehicleContext() {
    const context = (0, react_1.useContext)(VehicleContext);
    if (!context) {
        throw new Error("useVehicleContext must be used within a VehicleProvider");
    }
    return context;
} //# sourceMappingURL=VehicleContext.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/react/dist/hooks/useVehicleComparison.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useVehicleComparison = useVehicleComparison;
const VehicleContext_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/context/VehicleContext.js [app-client] (ecmascript)");
function useVehicleComparison() {
    const { vehicles, selectedVehicles, comparisonResult, activeStrategy, selectVehicleForComparison, removeVehicleFromComparison, setStrategy } = (0, VehicleContext_1.useVehicleContext)();
    const isSelected = (vehicleId)=>selectedVehicles.some((v)=>v.id === vehicleId);
    const canAddMore = selectedVehicles.length < 3;
    const toggleVehicle = (vehicle)=>{
        if (isSelected(vehicle.id)) {
            removeVehicleFromComparison(vehicle.id);
        } else if (canAddMore) {
            selectVehicleForComparison(vehicle);
        }
    };
    return {
        vehicles,
        selectedVehicles,
        comparisonResult,
        activeStrategy,
        isSelected,
        canAddMore,
        toggleVehicle,
        setStrategy
    };
} //# sourceMappingURL=useVehicleComparison.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/react/dist/hooks/useConfigurator.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useConfigurator = useConfigurator;
const VehicleContext_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/context/VehicleContext.js [app-client] (ecmascript)");
function useConfigurator() {
    const { configuration, startConfiguration, selectColor, selectWheels, togglePackage } = (0, VehicleContext_1.useVehicleContext)();
    const isPackageSelected = (packageId)=>configuration?.selectedPackages?.some((p)=>p.id === packageId) || false;
    const isColorSelected = (colorId)=>configuration?.selectedColor?.id === colorId || false;
    const isWheelsSelected = (wheelId)=>configuration?.selectedWheels?.id === wheelId || false;
    const formattedPrice = configuration ? new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR"
    }).format(configuration.totalPrice) : null;
    return {
        configuration,
        startConfiguration,
        selectColor,
        selectWheels,
        togglePackage,
        isPackageSelected,
        isColorSelected,
        isWheelsSelected,
        formattedPrice
    };
} //# sourceMappingURL=useConfigurator.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/react/dist/components/VehicleCard.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VehicleCard = VehicleCard;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
function VehicleCard({ vehicle, isSelected = false, onToggle, canSelect = true, className = "", selectedClassName = "border-blue-500", renderImage, renderBadge, renderActions }) {
    const handleToggle = ()=>{
        if (onToggle && (canSelect || isSelected)) {
            onToggle(vehicle);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };
    return (0, jsx_runtime_1.jsxs)("article", {
        "aria-label": `${vehicle.make} ${vehicle.model} ${vehicle.year}`,
        "aria-selected": isSelected,
        className: className,
        style: {
            backgroundColor: "var(--color-panel)",
            border: isSelected ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
            borderRadius: "16px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            transition: "border-color 0.2s, box-shadow 0.2s",
            boxShadow: isSelected ? "0 0 0 1px var(--color-accent), 0 8px 32px rgba(240,165,0,0.08)" : "0 4px 24px rgba(0,0,0,0.3)"
        },
        children: [
            renderImage?.(vehicle),
            renderBadge?.(vehicle),
            (0, jsx_runtime_1.jsxs)("header", {
                style: {
                    marginBottom: "16px"
                },
                children: [
                    (0, jsx_runtime_1.jsxs)("h2", {
                        style: {
                            fontFamily: "var(--font-display)",
                            fontSize: "24px",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                            color: "var(--color-text)",
                            margin: "0 0 4px 0"
                        },
                        children: [
                            vehicle.make,
                            " ",
                            vehicle.model
                        ]
                    }),
                    (0, jsx_runtime_1.jsx)("p", {
                        style: {
                            fontSize: "13px",
                            color: "var(--color-muted)",
                            margin: 0
                        },
                        children: vehicle.year
                    })
                ]
            }),
            (0, jsx_runtime_1.jsx)("dl", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    margin: 0
                },
                children: [
                    {
                        label: "Price",
                        value: new Intl.NumberFormat("nl-NL", {
                            style: "currency",
                            currency: "EUR",
                            maximumFractionDigits: 0
                        }).format(vehicle.price)
                    },
                    {
                        label: "Power",
                        value: `${vehicle.specs.horsepower} hp`
                    },
                    {
                        label: "0–100 km/h",
                        value: `${vehicle.specs.acceleration}s`
                    },
                    {
                        label: "Consumption",
                        value: `${vehicle.specs.fuelEfficiency} L/100km`
                    }
                ].map(({ label, value })=>(0, jsx_runtime_1.jsxs)("div", {
                        style: {
                            backgroundColor: "var(--color-surface)",
                            borderRadius: "8px",
                            padding: "10px 12px"
                        },
                        children: [
                            (0, jsx_runtime_1.jsx)("dt", {
                                style: {
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "var(--color-muted)",
                                    marginBottom: "4px"
                                },
                                children: label
                            }),
                            (0, jsx_runtime_1.jsx)("dd", {
                                style: {
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    color: "var(--color-text)",
                                    margin: 0
                                },
                                children: value
                            })
                        ]
                    }, label))
            }),
            renderActions?.(vehicle)
        ]
    });
} //# sourceMappingURL=VehicleCard.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/react/dist/components/ComparisonTable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComparisonTable = ComparisonTable;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
function ComparisonTable({ result, availableStrategies, onStrategyChange, className = "", headerClassName = "", rowClassName = "", scoreClassName = "" }) {
    const { scoredVehicles, strategyName, strategyDescription } = result;
    return (0, jsx_runtime_1.jsxs)("section", {
        "aria-label": "Vehicle comparison",
        children: [
            (0, jsx_runtime_1.jsxs)("div", {
                role: "group",
                "aria-label": "Scoring strategy",
                children: [
                    (0, jsx_runtime_1.jsx)("p", {
                        children: strategyDescription
                    }),
                    (0, jsx_runtime_1.jsx)("div", {
                        children: availableStrategies.map((strategy)=>(0, jsx_runtime_1.jsx)("button", {
                                onClick: ()=>onStrategyChange(strategy),
                                "aria-pressed": strategy.name === strategyName,
                                "aria-label": `Score by ${strategy.name}: ${strategy.description}`,
                                children: strategy.name
                            }, strategy.name))
                    })
                ]
            }),
            (0, jsx_runtime_1.jsxs)("div", {
                className: className,
                role: "table",
                "aria-label": "Vehicle comparison scores",
                children: [
                    (0, jsx_runtime_1.jsxs)("div", {
                        role: "row",
                        className: headerClassName,
                        children: [
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "Rank"
                            }),
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "Vehicle"
                            }),
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "Score"
                            }),
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "Power"
                            }),
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "0-100"
                            }),
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "Consumption"
                            }),
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "Range"
                            }),
                            (0, jsx_runtime_1.jsx)("span", {
                                role: "columnheader",
                                children: "Price"
                            })
                        ]
                    }),
                    scoredVehicles.map(({ vehicle, score, rank })=>(0, jsx_runtime_1.jsxs)("div", {
                            role: "row",
                            className: rowClassName,
                            children: [
                                (0, jsx_runtime_1.jsxs)("span", {
                                    role: "cell",
                                    "aria-label": "Rank",
                                    children: [
                                        "#",
                                        rank
                                    ]
                                }),
                                (0, jsx_runtime_1.jsxs)("span", {
                                    role: "cell",
                                    children: [
                                        (0, jsx_runtime_1.jsxs)("strong", {
                                            children: [
                                                vehicle.make,
                                                " ",
                                                vehicle.model
                                            ]
                                        }),
                                        (0, jsx_runtime_1.jsxs)("small", {
                                            children: [
                                                vehicle.year,
                                                " \u00B7 ",
                                                vehicle.fuelType
                                            ]
                                        })
                                    ]
                                }),
                                (0, jsx_runtime_1.jsx)("span", {
                                    role: "cell",
                                    className: scoreClassName,
                                    "aria-label": `Score: ${score}`,
                                    children: score.toFixed(1)
                                }),
                                (0, jsx_runtime_1.jsxs)("span", {
                                    role: "cell",
                                    children: [
                                        vehicle.specs.horsepower,
                                        " hp"
                                    ]
                                }),
                                (0, jsx_runtime_1.jsxs)("span", {
                                    role: "cell",
                                    children: [
                                        vehicle.specs.acceleration,
                                        "s"
                                    ]
                                }),
                                (0, jsx_runtime_1.jsxs)("span", {
                                    role: "cell",
                                    children: [
                                        vehicle.specs.fuelEfficiency,
                                        " L/100km"
                                    ]
                                }),
                                (0, jsx_runtime_1.jsxs)("span", {
                                    role: "cell",
                                    children: [
                                        vehicle.specs.range,
                                        " km"
                                    ]
                                }),
                                (0, jsx_runtime_1.jsx)("span", {
                                    role: "cell",
                                    children: new Intl.NumberFormat("nl-NL", {
                                        style: "currency",
                                        currency: "EUR",
                                        maximumFractionDigits: 0
                                    }).format(vehicle.price)
                                })
                            ]
                        }, vehicle.id))
                ]
            })
        ]
    });
} //# sourceMappingURL=ComparisonTable.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/react/dist/components/ConfiguratorForm.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConfiguratorForm = ConfiguratorForm;
const jsx_runtime_1 = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
function ConfiguratorForm({ configuration, options, onSelectColor, onSelectWheels, onTogglePackage, isColorSelected, isWheelsSelected, isPackageSelected, formattedPrice, className = "", fieldsetClassName = "", legendClassName = "", optionClassName = "", selectedOptionClassName = "" }) {
    return (0, jsx_runtime_1.jsxs)("section", {
        "aria-label": "Vehicle configurator form",
        className: className,
        children: [
            (0, jsx_runtime_1.jsxs)("header", {
                children: [
                    (0, jsx_runtime_1.jsxs)("h2", {
                        children: [
                            configuration.vehicle.make,
                            " ",
                            configuration.vehicle.model
                        ]
                    }),
                    (0, jsx_runtime_1.jsx)("p", {
                        "aria-label": "Total price",
                        "aria-live": "polite",
                        children: formattedPrice
                    })
                ]
            }),
            (0, jsx_runtime_1.jsxs)("fieldset", {
                className: fieldsetClassName,
                children: [
                    (0, jsx_runtime_1.jsx)("legend", {
                        className: legendClassName,
                        children: "Colors"
                    }),
                    (0, jsx_runtime_1.jsxs)("div", {
                        role: "radiogroup",
                        "aria-label": "Select a color",
                        children: [
                            " ",
                            options.colors.map((color)=>(0, jsx_runtime_1.jsx)("button", {
                                    role: "radio",
                                    "aria-checked": isColorSelected(color.id),
                                    "aria-label": `${color.name}${color.priceModifier > 0 ? ` +€${color.priceModifier}` : "included"}`,
                                    onClick: ()=>onSelectColor(color.id),
                                    style: {
                                        backgroundColor: color.hex
                                    },
                                    title: color.name,
                                    className: `${optionClassName} ${isColorSelected(color.id) ? selectedOptionClassName : ""}`
                                }, color.id))
                        ]
                    })
                ]
            }),
            (0, jsx_runtime_1.jsxs)("fieldset", {
                children: [
                    (0, jsx_runtime_1.jsx)("legend", {
                        children: "Wheels"
                    }),
                    (0, jsx_runtime_1.jsx)("div", {
                        role: "radiogroup",
                        "aria-label": "Select wheels",
                        children: options.wheels.map((wheel)=>(0, jsx_runtime_1.jsxs)("button", {
                                role: "radio",
                                "aria-checked": isWheelsSelected(wheel.id),
                                "aria-label": `${wheel.name}${wheel.priceModifier > 0 ? ` +€${wheel.priceModifier}` : " included"}`,
                                onClick: ()=>onSelectWheels(wheel.id),
                                children: [
                                    wheel.name,
                                    wheel.priceModifier > 0 && (0, jsx_runtime_1.jsxs)("small", {
                                        children: [
                                            "+\u20AC",
                                            wheel.priceModifier.toLocaleString("nl-NL")
                                        ]
                                    })
                                ]
                            }, wheel.id))
                    })
                ]
            }),
            (0, jsx_runtime_1.jsxs)("fieldset", {
                children: [
                    (0, jsx_runtime_1.jsx)("legend", {
                        children: "Packages"
                    }),
                    (0, jsx_runtime_1.jsx)("div", {
                        children: options.packages.map((pkg)=>(0, jsx_runtime_1.jsxs)("button", {
                                role: "checkbox",
                                "aria-checked": isPackageSelected(pkg.id),
                                "aria-label": `${pkg.name}: ${pkg.description}`,
                                onClick: ()=>onTogglePackage(pkg.id),
                                children: [
                                    (0, jsx_runtime_1.jsx)("strong", {
                                        children: pkg.name
                                    }),
                                    (0, jsx_runtime_1.jsx)("p", {
                                        children: pkg.description
                                    }),
                                    (0, jsx_runtime_1.jsx)("ul", {
                                        "aria-label": "Included features",
                                        children: pkg.features.map((feature)=>(0, jsx_runtime_1.jsx)("li", {
                                                children: feature
                                            }, feature))
                                    }),
                                    (0, jsx_runtime_1.jsxs)("span", {
                                        children: [
                                            "+\u20AC",
                                            pkg.priceModifier.toLocaleString("nl-NL")
                                        ]
                                    })
                                ]
                            }, pkg.id))
                    })
                ]
            })
        ]
    });
} //# sourceMappingURL=ConfiguratorForm.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/packages/react/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// Context
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/context/VehicleContext.js [app-client] (ecmascript)"), exports);
// Hooks
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/hooks/useVehicleComparison.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/hooks/useConfigurator.js [app-client] (ecmascript)"), exports);
// Components
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/components/VehicleCard.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/components/ComparisonTable.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Jaar4/automotive-framework/packages/react/dist/components/ConfiguratorForm.js [app-client] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/apps/demo/app/(app)/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/packages/react/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
function Providers({ children, vehicles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VehicleProvider"], {
        vehicles: vehicles,
        children: children
    }, void 0, false, {
        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/providers.tsx",
        lineNumber: 12,
        columnNumber: 12
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/packages/react/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Nav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { selectedVehicles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVehicleComparison"])();
    const links = [
        {
            href: "/",
            label: "Catalogue"
        },
        {
            href: "/compare",
            label: "Compare",
            count: selectedVehicles.length
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Main navigation",
        style: {
            borderBottom: "1px solid var(--color-border)",
            backgroundColor: "var(--color-carbon)",
            position: "sticky",
            top: 0,
            zIndex: 50,
            backdropFilter: "blur(12px)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "0 24px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        textDecoration: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-display)",
                            fontSize: "22px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "var(--color-text)"
                        },
                        children: [
                            "AUTO",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--color-accent)"
                                },
                                children: "FRAME"
                            }, void 0, false, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        display: "flex",
                        gap: "32px",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        alignItems: "center"
                    },
                    children: links.map((link)=>{
                        const isActive = pathname === link.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                "aria-current": isActive ? "page" : undefined,
                                style: {
                                    textDecoration: "none",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    transition: "color 0.2s"
                                },
                                children: [
                                    link.label,
                                    link.count && link.count > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            backgroundColor: "var(--color-accent)",
                                            color: "var(--color-carbon)",
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            width: "18px",
                                            height: "18px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        },
                                        children: link.count
                                    }, void 0, false, {
                                        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
                                        lineNumber: 96,
                                        columnNumber: 41
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
                                lineNumber: 76,
                                columnNumber: 33
                            }, this)
                        }, link.href, false, {
                            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
                            lineNumber: 75,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
            lineNumber: 32,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/components/Nav.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(Nav, "kwAJkw/GzYc07lzAmgH8UNIUAAA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVehicleComparison"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Jaar4/automotive-framework/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Jaar4/automotive-framework/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Jaar4_automotive-framework_79470985._.js.map
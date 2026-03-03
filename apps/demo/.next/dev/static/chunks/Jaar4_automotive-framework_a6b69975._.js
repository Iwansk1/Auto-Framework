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
"[project]/Jaar4/automotive-framework/apps/demo/app/(app)/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/packages/react/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$data$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Jaar4/automotive-framework/apps/demo/data/vehicles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$packages$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VehicleProvider"], {
        vehicles: __TURBOPACK__imported__module__$5b$project$5d2f$Jaar4$2f$automotive$2d$framework$2f$apps$2f$demo$2f$data$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicles"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Jaar4/automotive-framework/apps/demo/app/(app)/providers.tsx",
        lineNumber: 7,
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
]);

//# sourceMappingURL=Jaar4_automotive-framework_a6b69975._.js.map
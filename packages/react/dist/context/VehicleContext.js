"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleProvider = VehicleProvider;
exports.useVehicleContext = useVehicleContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@automotive/core");
const VehicleContext = (0, react_1.createContext)(null);
const defaultConfigurationOptions = {
    colors: [
        { id: "black", name: "Black", hex: "#000000", priceModifier: 0 },
        { id: "white", name: "White", hex: "#FFFFFF", priceModifier: 0 },
        {
            id: "blue",
            name: "Portimao Blue",
            hex: "#2d4a7a",
            priceModifier: 750,
        },
        {
            id: "red",
            name: "Melbourne Red",
            hex: "#c0392b",
            priceModifier: 750,
        },
        {
            id: "green",
            name: "Isle of Man Green",
            hex: "#2d6a4f",
            priceModifier: 1200,
        },
    ],
    wheels: [
        {
            id: "standard",
            name: 'Standard 18"',
            sizeInch: 18,
            priceModifier: 0,
        },
        { id: "sport", name: 'Sport 19"', sizeInch: 19, priceModifier: 800 },
        {
            id: "performance",
            name: 'Performance 20"',
            sizeInch: 20,
            priceModifier: 1500,
        },
    ],
    packages: [
        {
            id: "comfort",
            name: "Comfort Package",
            description: "Enhanced comfort for long journeys.",
            features: [
                "Heated seats",
                "Heated steering wheel",
                "Parking sensors",
            ],
            priceModifier: 1800,
        },
        {
            id: "technology",
            name: "Technology Package",
            description: "Latest driver assistance systems",
            features: [
                "Lane assist",
                "Blind spot detection",
                "Head-up display",
            ],
            priceModifier: 2400,
        },
        {
            id: "sport",
            name: "Sport Package",
            description: "Track-focused upgrades",
            features: ["Sport exhaust", "Carbon trim", "Sport suspension"],
            priceModifier: 3200,
        },
    ],
};
function VehicleProvider({ children, vehicles, configurationOptions = defaultConfigurationOptions, }) {
    // Strategies
    const performanceStrategy = (0, react_1.useMemo)(() => new core_1.PerformanceScoringStrategy(), []);
    const efficiencyStrategy = (0, react_1.useMemo)(() => new core_1.EfficiencyScoringStrategy(), []);
    // Services
    const comparisonService = (0, react_1.useMemo)(() => new core_1.ComparisonService(performanceStrategy), [performanceStrategy]);
    const configuratorService = (0, react_1.useMemo)(() => new core_1.ConfiguratorService(configurationOptions), [configurationOptions]);
    // State
    const [activeStrategy, setActiveStrategy] = (0, react_1.useState)(performanceStrategy);
    const [selectedVehicles, setSelectedVehicles] = (0, react_1.useState)([]);
    const [comparisonResult, setComparisonResult] = (0, react_1.useState)(null);
    const [configuration, setConfiguration] = (0, react_1.useState)(null);
    // Comparison handlers
    const selectVehicleForComparison = (vehicle) => {
        const updated = [...selectedVehicles, vehicle];
        setSelectedVehicles(updated);
        setComparisonResult(comparisonService.compare(updated));
    };
    const removeVehicleFromComparison = (vehicleId) => {
        const updated = selectedVehicles.filter((v) => v.id !== vehicleId);
        setSelectedVehicles(updated);
        setComparisonResult(updated.length > 0 ? comparisonService.compare(updated) : null);
    };
    const setStrategy = (strategy) => {
        comparisonService.setStrategy(strategy);
        setActiveStrategy(strategy);
        if (selectedVehicles.length > 0) {
            setComparisonResult(comparisonService.compare(selectedVehicles));
        }
    };
    // Configurator handlers
    const startConfiguration = (vehicle) => {
        setConfiguration(configuratorService.createConfiguration(vehicle));
    };
    const selectColor = (colorId) => {
        if (!configuration)
            return;
        setConfiguration(configuratorService.selectColor(configuration, colorId));
    };
    const selectWheels = (wheelId) => {
        if (!configuration)
            return;
        setConfiguration(configuratorService.selectWheels(configuration, wheelId));
    };
    const togglePackage = (packageId) => {
        if (!configuration)
            return;
        setConfiguration(configuratorService.togglePackage(configuration, packageId));
    };
    // Context value
    const value = (0, react_1.useMemo)(() => ({
        vehicles,
        selectedVehicles,
        comparisonResult,
        activeStrategy,
        selectVehicleForComparison,
        removeVehicleFromComparison,
        setStrategy,
        configuration,
        configurationOptions,
        startConfiguration,
        selectColor,
        selectWheels,
        togglePackage,
    }), [
        vehicles,
        selectedVehicles,
        comparisonResult,
        activeStrategy,
        configuration,
        configurationOptions,
    ]);
    return ((0, jsx_runtime_1.jsx)(VehicleContext.Provider, { value: value, children: children }));
}
// ─── Consumer hook ────────────────────────────────────────────────────────────
function useVehicleContext() {
    const context = (0, react_1.useContext)(VehicleContext);
    if (!context) {
        throw new Error("useVehicleContext must be used within a VehicleProvider");
    }
    return context;
}
//# sourceMappingURL=VehicleContext.js.map
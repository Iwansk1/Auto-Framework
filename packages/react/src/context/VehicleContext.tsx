import React, { createContext, useContext, useState, useMemo } from "react";
import {
    Vehicle,
    ComparisonResult,
    VehicleConfiguration,
    ConfiguratorOptions,
    ComparisonService,
    ConfiguratorService,
    PerformanceScoringStrategy,
    EfficiencyScoringStrategy,
    ScoringStrategy,
} from "@automotive/core";

interface VehicleContextValue {
    vehicles: Vehicle[];

    // Comparison
    selectedVehicles: Vehicle[];
    comparisonResult: ComparisonResult | null;
    activeStrategy: ScoringStrategy;
    selectVehicleForComparison: (vehicle: Vehicle) => void;
    removeVehicleFromComparison: (vehicleId: string) => void;
    setStrategy: (strategy: ScoringStrategy) => void;

    // Configurator
    configuration: VehicleConfiguration | null;
    startConfiguration: (vehicle: Vehicle) => void;
    selectColor: (colorId: string) => void;
    selectWheels: (wheelId: string) => void;
    togglePackage: (packageId: string) => void;
    configurationOptions: ConfiguratorOptions;
}
const VehicleContext = createContext<VehicleContextValue | null>(null);

const defaultConfigurationOptions: ConfiguratorOptions = {
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

interface VehicleProviderProps {
    children: React.ReactNode;
    vehicles: Vehicle[];
    configurationOptions?: ConfiguratorOptions;
}

export function VehicleProvider({
    children,
    vehicles,
    configurationOptions = defaultConfigurationOptions,
}: VehicleProviderProps) {
    // Strategies
    const performanceStrategy = useMemo(
        () => new PerformanceScoringStrategy(),
        [],
    );
    const efficiencyStrategy = useMemo(
        () => new EfficiencyScoringStrategy(),
        [],
    );

    // Services
    const comparisonService = useMemo(
        () => new ComparisonService(performanceStrategy),
        [performanceStrategy],
    );
    const configuratorService = useMemo(
        () => new ConfiguratorService(configurationOptions),
        [configurationOptions],
    );

    // State
    const [activeStrategy, setActiveStrategy] =
        useState<ScoringStrategy>(performanceStrategy);
    const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([]);
    const [comparisonResult, setComparisonResult] =
        useState<ComparisonResult | null>(null);
    const [configuration, setConfiguration] =
        useState<VehicleConfiguration | null>(null);

    // Comparison handlers
    const selectVehicleForComparison = (vehicle: Vehicle) => {
        const updated = [...selectedVehicles, vehicle];
        setSelectedVehicles(updated);
        setComparisonResult(comparisonService.compare(updated));
    };

    const removeVehicleFromComparison = (vehicleId: string) => {
        const updated = selectedVehicles.filter((v) => v.id !== vehicleId);
        setSelectedVehicles(updated);
        setComparisonResult(
            updated.length > 0 ? comparisonService.compare(updated) : null,
        );
    };

    const setStrategy = (strategy: ScoringStrategy) => {
        comparisonService.setStrategy(strategy);
        setActiveStrategy(strategy);
        if (selectedVehicles.length > 0) {
            setComparisonResult(comparisonService.compare(selectedVehicles));
        }
    };

    // Configurator handlers
    const startConfiguration = (vehicle: Vehicle) => {
        setConfiguration(configuratorService.createConfiguration(vehicle));
    };

    const selectColor = (colorId: string) => {
        if (!configuration) return;
        setConfiguration(
            configuratorService.selectColor(configuration, colorId),
        );
    };

    const selectWheels = (wheelId: string) => {
        if (!configuration) return;
        setConfiguration(
            configuratorService.selectWheels(configuration, wheelId),
        );
    };

    const togglePackage = (packageId: string) => {
        if (!configuration) return;
        setConfiguration(
            configuratorService.togglePackage(configuration, packageId),
        );
    };

    // Context value
    const value = useMemo<VehicleContextValue>(
        () => ({
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
        }),
        [
            vehicles,
            selectedVehicles,
            comparisonResult,
            activeStrategy,
            configuration,
            configurationOptions,
        ],
    );

    return (
        <VehicleContext.Provider value={value}>
            {children}
        </VehicleContext.Provider>
    );
}

// ─── Consumer hook ────────────────────────────────────────────────────────────

export function useVehicleContext(): VehicleContextValue {
    const context = useContext(VehicleContext);
    if (!context) {
        throw new Error(
            "useVehicleContext must be used within a VehicleProvider",
        );
    }
    return context;
}

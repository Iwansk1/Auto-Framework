import React from "react";
import { Vehicle, ComparisonResult, VehicleConfiguration, ConfiguratorOptions, ScoringStrategy } from "@automotive/core";
interface VehicleContextValue {
    vehicles: Vehicle[];
    selectedVehicles: Vehicle[];
    comparisonResult: ComparisonResult | null;
    activeStrategy: ScoringStrategy;
    selectVehicleForComparison: (vehicle: Vehicle) => void;
    removeVehicleFromComparison: (vehicleId: string) => void;
    setStrategy: (strategy: ScoringStrategy) => void;
    configuration: VehicleConfiguration | null;
    startConfiguration: (vehicle: Vehicle) => void;
    selectColor: (colorId: string) => void;
    selectWheels: (wheelId: string) => void;
    togglePackage: (packageId: string) => void;
}
interface VehicleProviderProps {
    children: React.ReactNode;
    vehicles: Vehicle[];
    configurationOptions?: ConfiguratorOptions;
}
export declare function VehicleProvider({ children, vehicles, configurationOptions, }: VehicleProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useVehicleContext(): VehicleContextValue;
export {};
//# sourceMappingURL=VehicleContext.d.ts.map
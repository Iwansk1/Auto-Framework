import { Vehicle, ScoringStrategy } from "@automotive/core";
export declare function useVehicleComparison(): {
    vehicles: Vehicle[];
    selectedVehicles: Vehicle[];
    comparisonResult: import("@automotive/core").ComparisonResult | null;
    activeStrategy: ScoringStrategy;
    isSelected: (vehicleId: string) => boolean;
    canAddMore: boolean;
    toggleVehicle: (vehicle: Vehicle) => void;
    setStrategy: (strategy: ScoringStrategy) => void;
};
//# sourceMappingURL=useVehicleComparison.d.ts.map
import { VehicleFilters } from "@automotive/core";
export declare function useVehicleFilter(): {
    filteredVehicles: import("@automotive/core").Vehicle[];
    filters: VehicleFilters;
    updateFilter: (key: keyof VehicleFilters, value: string | number | undefined) => void;
    resetFilters: () => void;
    isFiltered: boolean;
    availableCategories: string[];
    availableFuelTypes: import("@automotive/core").FuelType[];
    minPrice: number;
    maxPrice: number;
    totalCount: number;
    filteredCount: number;
};
//# sourceMappingURL=useVehicleFilter.d.ts.map
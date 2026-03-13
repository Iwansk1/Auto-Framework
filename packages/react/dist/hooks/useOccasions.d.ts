import { OccasionFilters } from "@automotive/core";
export declare function useOccasions(): {
    occasions: import("@automotive/core").Occasion[];
    filteredOccasions: import("@automotive/core").Occasion[];
    filters: OccasionFilters;
    setFilters: (filters: OccasionFilters) => void;
    updateFilter: (key: keyof OccasionFilters, value: string | number | undefined) => void;
    resetFilters: () => void;
    formattedPrice: (price: number) => string;
    formattedMileage: (mileage: number) => string;
    totalCount: number;
    filteredCount: number;
    isFiltered: boolean;
};
//# sourceMappingURL=useOccasions.d.ts.map
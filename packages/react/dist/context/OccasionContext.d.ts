import React from "react";
import { Occasion, OccasionFilters } from "@automotive/core";
interface OccasionContextValue {
    occasions: Occasion[];
    filteredOccasions: Occasion[];
    filters: OccasionFilters;
    setFilters: (filters: OccasionFilters) => void;
    resetFilters: () => void;
}
interface OccasionProviderProps {
    children: React.ReactNode;
    occasions: Occasion[];
}
export declare function OccasionProvider({ children, occasions, }: OccasionProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useOccasionContext(): OccasionContextValue;
export {};
//# sourceMappingURL=OccasionContext.d.ts.map
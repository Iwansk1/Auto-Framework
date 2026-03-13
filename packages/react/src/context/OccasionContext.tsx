import React, { createContext, useContext, useState, useMemo } from "react";
import { Occasion, OccasionFilters, FilterService } from "@automotive/core";

interface OccasionContextValue {
    occasions: Occasion[];
    filteredOccasions: Occasion[];
    filters: OccasionFilters;
    setFilters: (filters: OccasionFilters) => void;
    resetFilters: () => void;
}

const OccasionContext = createContext<OccasionContextValue | null>(null);

const defaultFilters: OccasionFilters = {};

interface OccasionProviderProps {
    children: React.ReactNode;
    occasions: Occasion[];
}

export function OccasionProvider({
    children,
    occasions,
}: OccasionProviderProps) {
    const filterService = useMemo(() => new FilterService(), []);
    const [filters, setFilters] = useState<OccasionFilters>(defaultFilters);

    const filteredOccasions = useMemo(
        () => filterService.filterOccasions(occasions, filters),
        [occasions, filters, filterService],
    );

    const resetFilters = () => setFilters(defaultFilters);

    const value = useMemo<OccasionContextValue>(
        () => ({
            occasions,
            filteredOccasions,
            filters,
            setFilters,
            resetFilters,
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }),
        [occasions, filteredOccasions, filters],
    );

    return (
        <OccasionContext.Provider value={value}>
            {children}
        </OccasionContext.Provider>
    );
}

export function useOccasionContext(): OccasionContextValue {
    const context = useContext(OccasionContext);
    if (!context) {
        throw new Error(
            "useOccasionContext must be used within an OccasionProvider",
        );
    }
    return context;
}

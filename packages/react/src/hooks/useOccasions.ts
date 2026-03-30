import { OccasionFilters } from "@automotive/core";
import { useOccasionContext } from "../context/OccasionContext";

export function useOccasions() {
    const { occasions, filteredOccasions, filters, setFilters, resetFilters } =
        useOccasionContext();

    const updateFilter = (
        key: keyof OccasionFilters,
        value: string | number | undefined,
    ) => {
        setFilters({ ...filters, [key]: value });
    };

    const formattedPrice = (price: number) =>
        new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
        }).format(price);

    const formattedMileage = (mileage: number) =>
        new Intl.NumberFormat("nl-NL").format(mileage) + " km";

    const totalCount = occasions.length;
    const filteredCount = filteredOccasions.length;
    const isFiltered = totalCount !== filteredCount;

    return {
        occasions,
        filteredOccasions,
        filters,
        setFilters,
        updateFilter,
        resetFilters,
        formattedPrice,
        formattedMileage,
        totalCount,
        filteredCount,
        isFiltered,
    };
}

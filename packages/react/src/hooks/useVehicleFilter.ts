import { VehicleFilters } from "@automotive/core";
import { useVehicleContext } from "../context/VehicleContext";

export function useVehicleFilter() {
    const {
        vehicles,
        filteredVehicles,
        filters,
        setFilters,
        resetFilters,
        isFiltered,
    } = useVehicleContext();

    const updateFilter = (
        key: keyof VehicleFilters,
        value: string | number | undefined,
    ) => {
        setFilters({ ...filters, [key]: value });
    };

    // Derive unique values for filter dropdowns from the full vehicle list
    const availableCategories = [...new Set(vehicles.map((v) => v.category))];
    const availableFuelTypes = [...new Set(vehicles.map((v) => v.fuelType))];
    const prices = vehicles.map((v) => v.price);
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

    const totalCount = vehicles.length;
    const filteredCount = filteredVehicles.length;

    return {
        filteredVehicles,
        filters,
        updateFilter,
        resetFilters,
        isFiltered,
        availableCategories,
        availableFuelTypes,
        minPrice,
        maxPrice,
        totalCount,
        filteredCount,
    };
}

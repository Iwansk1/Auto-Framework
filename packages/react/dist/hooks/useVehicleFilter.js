"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVehicleFilter = useVehicleFilter;
const VehicleContext_1 = require("../context/VehicleContext");
function useVehicleFilter() {
    const { vehicles, filteredVehicles, filters, setFilters, resetFilters, isFiltered, } = (0, VehicleContext_1.useVehicleContext)();
    const updateFilter = (key, value) => {
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
//# sourceMappingURL=useVehicleFilter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOccasions = useOccasions;
const OccasionContext_1 = require("../context/OccasionContext");
function useOccasions() {
    const { occasions, filteredOccasions, filters, setFilters, resetFilters } = (0, OccasionContext_1.useOccasionContext)();
    const updateFilter = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };
    const formattedPrice = (price) => new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    }).format(price);
    const formattedMileage = (mileage) => new Intl.NumberFormat("nl-NL").format(mileage) + " km";
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
//# sourceMappingURL=useOccasions.js.map
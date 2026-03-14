"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterService = void 0;
class FilterService {
    filterVehicles(items, filters) {
        return items.filter((item) => {
            if (filters.search) {
                const query = filters.search.toLowerCase();
                const matches = item.make.toLowerCase().includes(query) ||
                    item.model.toLowerCase().includes(query);
                if (!matches)
                    return false;
            }
            if (filters.category && item.category !== filters.category)
                return false;
            if (filters.fuelType && item.fuelType !== filters.fuelType)
                return false;
            if (filters.minPrice && item.price < filters.minPrice)
                return false;
            if (filters.maxPrice && item.price > filters.maxPrice)
                return false;
            return true;
        });
    }
    filterOccasions(items, filters) {
        return items.filter((item) => {
            if (filters.search) {
                const query = filters.search.toLowerCase().trim();
                const combined = `${item.make} ${item.model}`.toLowerCase();
                if (!combined.includes(query))
                    return false;
            }
            if (filters.minPrice && item.askingPrice < filters.minPrice)
                return false;
            if (filters.maxPrice && item.askingPrice > filters.maxPrice)
                return false;
            if (filters.maxMileage && item.mileage > filters.maxMileage)
                return false;
            if (filters.transmission &&
                item.transmission !== filters.transmission)
                return false;
            if (filters.condition && item.condition !== filters.condition)
                return false;
            return true;
        });
    }
}
exports.FilterService = FilterService;
//# sourceMappingURL=FilterService.js.map
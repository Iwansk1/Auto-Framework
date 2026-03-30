export interface VehicleFilters {
    search?: string;
    category?: string;
    fuelType?: string;
    minPrice?: number;
    maxPrice?: number;
}

export interface OccasionFilters {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    minMileage?: number;
    maxMileage?: number;
    transmission?: string;
    condition?: string;
}

export class FilterService {
    filterVehicles<
        T extends {
            make: string;
            model: string;
            price: number;
            category: string;
            fuelType: string;
        },
    >(items: T[], filters: VehicleFilters): T[] {
        return items.filter((item) => {
            if (filters.search) {
                const query = filters.search.toLowerCase().trim();

                const combined = `${item.make} ${item.model}`.toLowerCase();

                if (!combined.includes(query)) return false;
            }

            if (filters.category && item.category !== filters.category)
                return false;
            if (filters.fuelType && item.fuelType !== filters.fuelType)
                return false;
            if (filters.minPrice && item.price < filters.minPrice) return false;
            if (filters.maxPrice && item.price > filters.maxPrice) return false;

            return true;
        });
    }

    filterOccasions<
        T extends {
            make: string;
            model: string;
            askingPrice: number;
            mileage: number;
            transmission: string;
            condition: string;
        },
    >(items: T[], filters: OccasionFilters): T[] {
        return items.filter((item) => {
            if (filters.search) {
                const query = filters.search.toLowerCase().trim();

                const combined = `${item.make} ${item.model}`.toLowerCase();

                if (!combined.includes(query)) return false;
            }

            if (filters.minPrice && item.askingPrice < filters.minPrice)
                return false;
            if (filters.maxPrice && item.askingPrice > filters.maxPrice)
                return false;
            if (filters.maxMileage && item.mileage > filters.maxMileage)
                return false;
            if (
                filters.transmission &&
                item.transmission !== filters.transmission
            )
                return false;
            if (filters.condition && item.condition !== filters.condition)
                return false;

            return true;
        });
    }
}

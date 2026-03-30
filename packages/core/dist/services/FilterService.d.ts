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
export declare class FilterService {
    filterVehicles<T extends {
        make: string;
        model: string;
        price: number;
        category: string;
        fuelType: string;
    }>(items: T[], filters: VehicleFilters): T[];
    filterOccasions<T extends {
        make: string;
        model: string;
        askingPrice: number;
        mileage: number;
        transmission: string;
        condition: string;
    }>(items: T[], filters: OccasionFilters): T[];
}
//# sourceMappingURL=FilterService.d.ts.map
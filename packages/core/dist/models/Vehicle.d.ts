export type FuelType = "petrol" | "diesel" | "electric" | "hybrid";
export interface VehicleSpecs {
    horsepower: number;
    torque: number;
    acceleration: number;
    topSpeed: number;
    fuelEfficiency: number;
    range: number;
}
export interface Vehicle {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    category: string;
    fuelType: FuelType;
    specs: VehicleSpecs;
    features: string[];
    imageUrl: string;
}
export interface ScoredVehicle {
    vehicle: Vehicle;
    score: number;
    rank: number;
}
export interface ComparisonResult {
    scoredVehicles: ScoredVehicle[];
    strategyName: string;
    strategyDescription: string;
}
//# sourceMappingURL=Vehicle.d.ts.map
export type FuelType = "petrol" | "diesel" | "electric" | "hybrid";

export interface VehicleSpecs {
    horsepower: number; // Engine power in HP
    torque: number; // Engine torque in Nm
    acceleration: number; // 0-100 km/h in seconds
    topSpeed: number; // km/h
    fuelEfficiency: number; // L/100 km (kWh/100 km for electric)
    range: number; // km
}

export interface Vehicle {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number; // EURO
    category: string; // "SUV", "Sedan", "Truck"
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

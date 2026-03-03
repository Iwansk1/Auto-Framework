import { Vehicle } from "./Vehicle";

export type ColorOption = {
    id: string;
    name: string;
    hex: string;
    priceModifier: number; // Percentage modifier for the price (e.g., 0.05 for 5% increase)
};

export type WheelOption = {
    id: string;
    name: string;
    sizeInch: number;
    priceModifier: number; // EURO
};

export type PackageOption = {
    id: string;
    name: string;
    description: string;
    features: string[];
    priceModifier: number; // EURO
};

export interface ConfiguratorOptions {
    colors: ColorOption[];
    wheels: WheelOption[];
    packages: PackageOption[];
}

export interface VehicleConfiguration {
    vehicle: Vehicle;
    selectedColor: ColorOption | null;
    selectedWheels: WheelOption | null;
    selectedPackages: PackageOption[];
    totalPrice: number; // Base price + modifiers
}

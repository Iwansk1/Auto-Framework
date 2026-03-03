import { Vehicle } from "./Vehicle";
export type ColorOption = {
    id: string;
    name: string;
    hex: string;
    priceModifier: number;
};
export type WheelOption = {
    id: string;
    name: string;
    sizeInch: number;
    priceModifier: number;
};
export type PackageOption = {
    id: string;
    name: string;
    description: string;
    features: string[];
    priceModifier: number;
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
    totalPrice: number;
}
//# sourceMappingURL=Configuration.d.ts.map
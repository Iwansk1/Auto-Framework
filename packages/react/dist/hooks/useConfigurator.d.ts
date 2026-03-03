import { Vehicle } from "@automotive/core";
export declare function useConfigurator(): {
    configuration: import("@automotive/core").VehicleConfiguration | null;
    startConfiguration: (vehicle: Vehicle) => void;
    selectColor: (colorId: string) => void;
    selectWheels: (wheelId: string) => void;
    togglePackage: (packageId: string) => void;
    isPackageSelected: (packageId: string) => boolean;
    isColorSelected: (colorId: string) => boolean;
    isWheelsSelected: (wheelId: string) => boolean;
    formattedPrice: string | null;
};
//# sourceMappingURL=useConfigurator.d.ts.map
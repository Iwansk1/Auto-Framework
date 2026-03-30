export declare function useConfigurator(): {
    configuration: import("@automotive/core").VehicleConfiguration | null;
    configuratorOptions: import("@automotive/core").ConfiguratorOptions;
    startConfiguration: (vehicle: import("@automotive/core").Vehicle) => void;
    selectColour: (colourId: string) => void;
    selectWheels: (wheelId: string) => void;
    togglePackage: (packageId: string) => void;
    isPackageSelected: (packageId: string) => boolean;
    isColourSelected: (colourId: string) => boolean;
    isWheelsSelected: (wheelId: string) => boolean;
    formattedPrice: string | null;
};
//# sourceMappingURL=useConfigurator.d.ts.map
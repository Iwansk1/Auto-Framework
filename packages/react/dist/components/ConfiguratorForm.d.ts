import { VehicleConfiguration, ConfiguratorOptions } from "@automotive/core";
interface ConfiguratorFormProps {
    configuration: VehicleConfiguration;
    options: ConfiguratorOptions;
    onSelectColour: (colourId: string) => void;
    onSelectWheels: (wheelId: string) => void;
    onTogglePackage: (packageId: string) => void;
    isColourSelected: (colourId: string) => boolean;
    isWheelsSelected: (wheelId: string) => boolean;
    isPackageSelected: (packageId: string) => boolean;
    formattedPrice: string | null;
    className?: string;
    fieldsetClassName?: string;
    legendClassName?: string;
    optionClassName?: string;
    selectedOptionClassName?: string;
}
export declare function ConfiguratorForm({ configuration, options, onSelectColour, onSelectWheels, onTogglePackage, isColourSelected, isWheelsSelected, isPackageSelected, formattedPrice, className, fieldsetClassName, legendClassName, optionClassName, selectedOptionClassName, }: ConfiguratorFormProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ConfiguratorForm.d.ts.map
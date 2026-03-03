import { VehicleConfiguration, ConfiguratorOptions } from "@automotive/core";
interface ConfiguratorFormProps {
    configuration: VehicleConfiguration;
    options: ConfiguratorOptions;
    onSelectColor: (colorId: string) => void;
    onSelectWheels: (wheelId: string) => void;
    onTogglePackage: (packageId: string) => void;
    isColorSelected: (colorId: string) => boolean;
    isWheelsSelected: (wheelId: string) => boolean;
    isPackageSelected: (packageId: string) => boolean;
    formattedPrice: string | null;
    className?: string;
    fieldsetClassName?: string;
    legendClassName?: string;
    optionClassName?: string;
    selectedOptionClassName?: string;
}
export declare function ConfiguratorForm({ configuration, options, onSelectColor, onSelectWheels, onTogglePackage, isColorSelected, isWheelsSelected, isPackageSelected, formattedPrice, className, fieldsetClassName, legendClassName, optionClassName, selectedOptionClassName, }: ConfiguratorFormProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ConfiguratorForm.d.ts.map
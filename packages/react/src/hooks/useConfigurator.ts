import { useVehicleContext } from "../context/VehicleContext";

export function useConfigurator() {
    const {
        configuration,
        configurationOptions,
        startConfiguration,
        selectColor,
        selectWheels,
        togglePackage,
    } = useVehicleContext();

    const isPackageSelected = (packageId: string): boolean =>
        configuration?.selectedPackages.some((p) => p.id === packageId) ??
        false;

    const isColorSelected = (colorId: string): boolean => {
        if (!configuration?.selectedColor) return false;
        return configuration.selectedColor.id === colorId;
    };

    const isWheelsSelected = (wheelId: string): boolean => {
        if (!configuration?.selectedWheels) return false;
        return configuration.selectedWheels.id === wheelId;
    };

    const formattedPrice = configuration
        ? new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
          }).format(configuration.totalPrice)
        : null;

    return {
        configuration,
        configuratorOptions: configurationOptions,
        startConfiguration,
        selectColor,
        selectWheels,
        togglePackage,
        isPackageSelected,
        isColorSelected,
        isWheelsSelected,
        formattedPrice,
    };
}

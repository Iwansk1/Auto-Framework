import { useVehicleContext } from "../context/VehicleContext";

export function useConfigurator() {
    const { configuration, configurationOptions, startConfiguration, selectColour, selectWheels, togglePackage } = useVehicleContext();

    const isPackageSelected = (packageId: string): boolean => configuration?.selectedPackages.some((p) => p.id === packageId) ?? false;

    const isColourSelected = (colourId: string): boolean => {
        if (!configuration?.selectedColour) return false;
        return configuration.selectedColour.id === colourId;
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
        selectColour,
        selectWheels,
        togglePackage,
        isPackageSelected,
        isColourSelected,
        isWheelsSelected,
        formattedPrice,
    };
}

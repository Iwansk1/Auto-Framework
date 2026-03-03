import { Vehicle } from "@automotive/core";
import { useVehicleContext } from "../context/VehicleContext";
import { use } from "react";

export function useConfigurator() {
    const {
        configuration,
        startConfiguration,
        selectColor,
        selectWheels,
        togglePackage,
    } = useVehicleContext();

    const isPackageSelected = (packageId: string): boolean =>
        configuration?.selectedPackages?.some((p) => p.id === packageId) ||
        false;

    const isColorSelected = (colorId: string): boolean =>
        configuration?.selectedColor?.id === colorId || false;

    const isWheelsSelected = (wheelId: string): boolean =>
        configuration?.selectedWheels?.id === wheelId || false;

    const formattedPrice = configuration
        ? new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
          }).format(configuration.totalPrice)
        : null;

    return {
        configuration,
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

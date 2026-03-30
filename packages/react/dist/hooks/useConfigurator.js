"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfigurator = useConfigurator;
const VehicleContext_1 = require("../context/VehicleContext");
function useConfigurator() {
    const { configuration, configurationOptions, startConfiguration, selectColour, selectWheels, togglePackage } = (0, VehicleContext_1.useVehicleContext)();
    const isPackageSelected = (packageId) => configuration?.selectedPackages.some((p) => p.id === packageId) ?? false;
    const isColourSelected = (colourId) => {
        if (!configuration?.selectedColour)
            return false;
        return configuration.selectedColour.id === colourId;
    };
    const isWheelsSelected = (wheelId) => {
        if (!configuration?.selectedWheels)
            return false;
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
//# sourceMappingURL=useConfigurator.js.map
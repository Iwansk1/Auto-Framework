"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfigurator = useConfigurator;
const VehicleContext_1 = require("../context/VehicleContext");
function useConfigurator() {
    const { configuration, startConfiguration, selectColor, selectWheels, togglePackage, } = (0, VehicleContext_1.useVehicleContext)();
    const isPackageSelected = (packageId) => configuration?.selectedPackages?.some((p) => p.id === packageId) ||
        false;
    const isColorSelected = (colorId) => configuration?.selectedColor?.id === colorId || false;
    const isWheelsSelected = (wheelId) => configuration?.selectedWheels?.id === wheelId || false;
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
//# sourceMappingURL=useConfigurator.js.map
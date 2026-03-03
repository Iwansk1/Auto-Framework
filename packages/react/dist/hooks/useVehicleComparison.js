"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVehicleComparison = useVehicleComparison;
const VehicleContext_1 = require("../context/VehicleContext");
function useVehicleComparison() {
    const { vehicles, selectedVehicles, comparisonResult, activeStrategy, selectVehicleForComparison, removeVehicleFromComparison, setStrategy, } = (0, VehicleContext_1.useVehicleContext)();
    const isSelected = (vehicleId) => selectedVehicles.some((v) => v.id === vehicleId);
    const canAddMore = selectedVehicles.length < 3;
    const toggleVehicle = (vehicle) => {
        if (isSelected(vehicle.id)) {
            removeVehicleFromComparison(vehicle.id);
        }
        else if (canAddMore) {
            selectVehicleForComparison(vehicle);
        }
    };
    return {
        vehicles,
        selectedVehicles,
        comparisonResult,
        activeStrategy,
        isSelected,
        canAddMore,
        toggleVehicle,
        setStrategy,
    };
}
//# sourceMappingURL=useVehicleComparison.js.map
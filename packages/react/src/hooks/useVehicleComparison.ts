import { Vehicle, ScoringStrategy } from "@automotive/core";
import { useVehicleContext } from "../context/VehicleContext";

export function useVehicleComparison() {
    const {
        vehicles,
        selectedVehicles,
        comparisonResult,
        activeStrategy,
        selectVehicleForComparison,
        removeVehicleFromComparison,
        setStrategy,
    } = useVehicleContext();

    const isSelected = (vehicleId: string): boolean =>
        selectedVehicles.some((v) => v.id === vehicleId);

    const canAddMore = selectedVehicles.length < 3;

    const toggleVehicle = (vehicle: Vehicle): void => {
        if (isSelected(vehicle.id)) {
            removeVehicleFromComparison(vehicle.id);
        } else if (canAddMore) {
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

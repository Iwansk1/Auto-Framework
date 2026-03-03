import { Vehicle } from "../models/Vehicle";
import { ScoringStrategy } from "./ScoringStrategy";

export class EfficiencyScoringStrategy implements ScoringStrategy {
    name = "Efficiency";
    description = "Scores vehicles based on fuel consumption and range";

    score(vehicle: Vehicle): number {
        const { fuelEfficiency, range } = vehicle.specs;

        // For L/100km: lower is better, reference is 12L/100km
        const efficiencyScore = Math.max(100 - (fuelEfficiency / 12) * 100, 0);

        // For range: higher is better, reference is 800km
        const rangeScore = Math.min((range / 800) * 100, 100);

        return efficiencyScore * 0.6 + rangeScore * 0.4;
    }
}

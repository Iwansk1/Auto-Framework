import { Vehicle } from "../models/Vehicle";
import { ScoringStrategy } from "./ScoringStrategy";

export class PerformanceScoringStrategy implements ScoringStrategy {
    name = "Performance";
    description = "Scores vehicles based on power, acceleration and top speed";

    score(vehicle: Vehicle): number {
        const { horsepower, acceleration, topSpeed } = vehicle.specs;

        // Normalize the values to 0-100 range
        const horsepowerScore = Math.min((horsepower / 500) * 100, 100);
        const accelerationScore = Math.max(100 - (acceleration / 10) * 100, 0);
        const topSpeedScore = Math.min((topSpeed / 300) * 100, 100);

        return (
            horsepowerScore * 0.35 +
            accelerationScore * 0.4 +
            topSpeedScore * 0.25
        );
    }
}

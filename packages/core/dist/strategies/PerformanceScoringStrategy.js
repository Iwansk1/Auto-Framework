"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceScoringStrategy = void 0;
class PerformanceScoringStrategy {
    constructor() {
        this.name = "Performance";
        this.description = "Scores vehicles based on power, acceleration and top speed";
    }
    score(vehicle) {
        const { horsepower, acceleration, topSpeed } = vehicle.specs;
        // Normalize the values to 0-100 range
        const horsepowerScore = Math.min((horsepower / 500) * 100, 100);
        const accelerationScore = Math.max(100 - (acceleration / 10) * 100, 0);
        const topSpeedScore = Math.min((topSpeed / 300) * 100, 100);
        return (horsepowerScore * 0.35 +
            accelerationScore * 0.4 +
            topSpeedScore * 0.25);
    }
}
exports.PerformanceScoringStrategy = PerformanceScoringStrategy;
//# sourceMappingURL=PerformanceScoringStrategy.js.map
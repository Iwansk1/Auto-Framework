"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparisonService = void 0;
class ComparisonService {
    constructor(strategy) {
        this.strategy = strategy;
    }
    // Swap strategies at runtime
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    getStrategy() {
        return this.strategy;
    }
    compare(vehicles) {
        if (vehicles.length === 0) {
            return {
                scoredVehicles: [],
                strategyName: this.strategy.name,
                strategyDescription: this.strategy.description,
            };
        }
        const scored = vehicles
            .map((vehicle) => ({
            vehicle,
            score: Math.round(this.strategy.score(vehicle) * 10) / 10,
        }))
            .sort((a, b) => b.score - a.score)
            .map((item, index) => ({ ...item, rank: index + 1 }));
        return {
            scoredVehicles: scored,
            strategyName: this.strategy.name,
            strategyDescription: this.strategy.description,
        };
    }
}
exports.ComparisonService = ComparisonService;
//# sourceMappingURL=ComparisonService.js.map
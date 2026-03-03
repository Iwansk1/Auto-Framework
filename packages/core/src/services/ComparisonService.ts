import { Vehicle, ScoredVehicle, ComparisonResult } from "../models/Vehicle";
import { ScoringStrategy } from "../strategies/ScoringStrategy";

export class ComparisonService {
    private strategy: ScoringStrategy;

    constructor(strategy: ScoringStrategy) {
        this.strategy = strategy;
    }

    // Swap strategies at runtime
    setStrategy(strategy: ScoringStrategy): void {
        this.strategy = strategy;
    }

    getStrategy(): ScoringStrategy {
        return this.strategy;
    }

    compare(vehicles: Vehicle[]): ComparisonResult {
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

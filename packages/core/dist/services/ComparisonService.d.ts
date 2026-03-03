import { Vehicle, ComparisonResult } from "../models/Vehicle";
import { ScoringStrategy } from "../strategies/ScoringStrategy";
export declare class ComparisonService {
    private strategy;
    constructor(strategy: ScoringStrategy);
    setStrategy(strategy: ScoringStrategy): void;
    getStrategy(): ScoringStrategy;
    compare(vehicles: Vehicle[]): ComparisonResult;
}
//# sourceMappingURL=ComparisonService.d.ts.map
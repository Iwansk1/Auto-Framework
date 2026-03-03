import { Vehicle } from "../models/Vehicle";
import { ScoringStrategy } from "./ScoringStrategy";
export declare class PerformanceScoringStrategy implements ScoringStrategy {
    name: string;
    description: string;
    score(vehicle: Vehicle): number;
}
//# sourceMappingURL=PerformanceScoringStrategy.d.ts.map
import { Vehicle } from "../models/Vehicle";
import { ScoringStrategy } from "./ScoringStrategy";
export declare class EfficiencyScoringStrategy implements ScoringStrategy {
    name: string;
    description: string;
    score(vehicle: Vehicle): number;
}
//# sourceMappingURL=EfficiencyScoringStrategy.d.ts.map
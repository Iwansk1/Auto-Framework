import { Vehicle } from "../models/Vehicle";

export interface ScoringStrategy {
    name: string;
    description: string;
    score(vehicle: Vehicle): number;
}

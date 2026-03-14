import { describe, it, expect, beforeEach } from "vitest";
import { ComparisonService } from "../services/ComparisonService";
import { PerformanceScoringStrategy } from "../strategies/PerformanceScoringStrategy";
import { EfficiencyScoringStrategy } from "../strategies/EfficiencyScoringStrategy";
import { Vehicle } from "../models/Vehicle";

const mockVehicles: Vehicle[] = [
    {
        id: "1",
        make: "BMW",
        model: "M3",
        year: 2024,
        price: 85000,
        category: "sedan",
        fuelType: "petrol",
        specs: {
            horsepower: 510,
            torque: 650,
            acceleration: 3.9,
            topSpeed: 290,
            fuelEfficiency: 10.5,
            range: 450,
        },
        features: ["Heated seats", "Navigation"],
        imageUrl:
            "/api/media/file/BMW-M3-Handschalter-2022-Hero.jpg?2026-03-03T16%3A14%3A42.745Z",
    },
    {
        id: "2",
        make: "Tesla",
        model: "Model 3",
        year: 2024,
        price: 52000,
        category: "sedan",
        fuelType: "electric",
        specs: {
            horsepower: 358,
            torque: 420,
            acceleration: 4.4,
            topSpeed: 225,
            fuelEfficiency: 0,
            range: 560,
        },
        features: ["Autopilot", "Navigation"],
        imageUrl:
            "/api/media/file/BMW-M3-Handschalter-2022-Hero.jpg?2026-03-03T16%3A14%3A42.745Z",
    },
    {
        id: "3",
        make: "Volkswagen",
        model: "Golf GTI",
        year: 2024,
        price: 42000,
        category: "hatchback",
        fuelType: "petrol",
        specs: {
            horsepower: 245,
            torque: 370,
            acceleration: 6.3,
            topSpeed: 250,
            fuelEfficiency: 7.1,
            range: 600,
        },
        features: ["Parking sensors", "Adaptive cruise"],
        imageUrl:
            "/api/media/file/BMW-M3-Handschalter-2022-Hero.jpg?2026-03-03T16%3A14%3A42.745Z",
    },
];

describe("ComparisonService", () => {
    let service: ComparisonService;

    beforeEach(() => {
        service = new ComparisonService(new PerformanceScoringStrategy());
    });

    describe("compare()", () => {
        it("returns a ComparisonResult with all vehicles scored", () => {
            const result = service.compare(mockVehicles);
            expect(result.scoredVehicles).toHaveLength(3);
        });

        it("ranks vehicles in descending order by score", () => {
            const result = service.compare(mockVehicles);
            const scores = result.scoredVehicles.map((s) => s.score);
            for (let i = 0; i < scores.length - 1; i++) {
                expect(scores[i]).toBeGreaterThanOrEqual(scores[i + 1]);
            }
        });

        it("assigns rank starting from 1", () => {
            const result = service.compare(mockVehicles);
            const ranks = result.scoredVehicles.map((s) => s.rank);
            expect(ranks).toContain(1);
            expect(Math.min(...ranks)).toBe(1);
        });

        it("BMW M3 ranks first with PerformanceScoringStrategy", () => {
            const result = service.compare(mockVehicles);
            expect(result.scoredVehicles[0].vehicle.model).toBe("M3");
        });

        it("bakes strategy name into the result snapshot", () => {
            const result = service.compare(mockVehicles);
            expect(result.strategyName).toBe("Performance");
        });

        it("returns empty scores for empty vehicle list", () => {
            const result = service.compare([]);
            expect(result.scoredVehicles).toHaveLength(0);
        });
    });

    describe("setStrategy()", () => {
        it("switches to EfficiencyScoringStrategy at runtime", () => {
            service.setStrategy(new EfficiencyScoringStrategy());
            const result = service.compare(mockVehicles);
            expect(result.strategyName).toBe("Efficiency");
        });

        it("Tesla ranks first with EfficiencyScoringStrategy due to range", () => {
            service.setStrategy(new EfficiencyScoringStrategy());
            const result = service.compare(mockVehicles);
            expect(result.scoredVehicles[0].vehicle.make).toBe("Tesla");
        });
    });
});

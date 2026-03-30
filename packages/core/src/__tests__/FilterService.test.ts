import { describe, it, expect, beforeEach } from "vitest";
import { FilterService } from "../services/FilterService";
import { Vehicle } from "../models/Vehicle";
import { Occasion } from "../models/Occasion";

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
        features: [],
        imageUrl: "/api/media/file/BMW-M3-Handschalter-2022-Hero.jpg?2026-03-03T16%3A14%3A42.745Z",
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
        features: [],
        imageUrl: "/api/media/file/BMW-M3-Handschalter-2022-Hero.jpg?2026-03-03T16%3A14%3A42.745Z",
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
        features: [],
        imageUrl: "/api/media/file/BMW-M3-Handschalter-2022-Hero.jpg?2026-03-03T16%3A14%3A42.745Z",
    },
];

const mockOccasions: Occasion[] = [
    {
        id: "1",
        make: "BMW",
        model: "M3",
        year: 2021,
        askingPrice: 74500,
        mileage: 45000,
        colour: "Frozen Grey",
        transmission: "manual",
        condition: "used",
        features: ["Airco", "Adaptieve cruise control"],
        images: [],
        available: true,
    },
    {
        id: "2",
        make: "Volkswagen",
        model: "Golf GTI",
        year: 2022,
        askingPrice: 38000,
        mileage: 22000,
        colour: "Wit",
        transmission: "automatic",
        condition: "used",
        features: ["Airco", "Navigatie"],
        images: [],
        available: true,
    },
    {
        id: "3",
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        askingPrice: 45000,
        mileage: 8000,
        colour: "Rood",
        transmission: "automatic",
        condition: "demo",
        features: ["Autopilot"],
        images: [],
        available: true,
    },
];

describe("FilterService", () => {
    let service: FilterService;

    beforeEach(() => {
        service = new FilterService();
    });

    describe("filterVehicles()", () => {
        it("returns all vehicles when no filters applied", () => {
            const result = service.filterVehicles(mockVehicles, {});
            expect(result).toHaveLength(3);
        });

        it("filters by search on make", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "BMW",
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("BMW");
        });

        it("filters by search on model", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "Golf",
            });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe("Golf GTI");
        });

        it("search is case insensitive", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "bmw",
            });
            expect(result).toHaveLength(1);
        });

        it("filters by category", () => {
            const result = service.filterVehicles(mockVehicles, {
                category: "hatchback",
            });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe("Golf GTI");
        });

        it("filters by fuelType", () => {
            const result = service.filterVehicles(mockVehicles, {
                fuelType: "electric",
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("Tesla");
        });

        it("filters by maxPrice", () => {
            const result = service.filterVehicles(mockVehicles, {
                maxPrice: 55000,
            });
            expect(result).toHaveLength(2);
        });

        it("filters by minPrice", () => {
            const result = service.filterVehicles(mockVehicles, {
                minPrice: 60000,
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("BMW");
        });

        it("combines multiple filters correctly", () => {
            const result = service.filterVehicles(mockVehicles, {
                fuelType: "petrol",
                maxPrice: 50000,
            });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe("Golf GTI");
        });

        it("returns empty array when no vehicles match", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "Ferrari",
            });
            expect(result).toHaveLength(0);
        });
    });

    describe("filterOccasions()", () => {
        it("returns all occasions when no filters applied", () => {
            const result = service.filterOccasions(mockOccasions, {});
            expect(result).toHaveLength(3);
        });

        it("filters by search combining make and model", () => {
            const result = service.filterOccasions(mockOccasions, {
                search: "BMW M3",
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("BMW");
        });

        it("filters by maxPrice", () => {
            const result = service.filterOccasions(mockOccasions, {
                maxPrice: 40000,
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("Volkswagen");
        });

        it("filters by maxMileage", () => {
            const result = service.filterOccasions(mockOccasions, {
                maxMileage: 10000,
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("Tesla");
        });

        it("filters by transmission", () => {
            const result = service.filterOccasions(mockOccasions, {
                transmission: "manual",
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("BMW");
        });

        it("filters by condition", () => {
            const result = service.filterOccasions(mockOccasions, {
                condition: "demo",
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("Tesla");
        });

        it("combines multiple filters correctly", () => {
            const result = service.filterOccasions(mockOccasions, {
                transmission: "automatic",
                maxPrice: 40000,
            });
            expect(result).toHaveLength(1);
            expect(result[0].make).toBe("Volkswagen");
        });

        it("returns empty array when no occasions match", () => {
            const result = service.filterOccasions(mockOccasions, {
                search: "Ferrari",
            });
            expect(result).toHaveLength(0);
        });
    });
});

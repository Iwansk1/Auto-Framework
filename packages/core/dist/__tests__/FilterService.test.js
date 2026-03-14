"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const FilterService_1 = require("../services/FilterService");
const mockVehicles = [
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
const mockOccasions = [
    {
        id: "1",
        make: "BMW",
        model: "M3",
        year: 2021,
        askingPrice: 74500,
        mileage: 45000,
        color: "Frozen Grey",
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
        color: "Wit",
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
        color: "Rood",
        transmission: "automatic",
        condition: "demo",
        features: ["Autopilot"],
        images: [],
        available: true,
    },
];
(0, vitest_1.describe)("FilterService", () => {
    let service;
    (0, vitest_1.beforeEach)(() => {
        service = new FilterService_1.FilterService();
    });
    (0, vitest_1.describe)("filterVehicles()", () => {
        (0, vitest_1.it)("returns all vehicles when no filters applied", () => {
            const result = service.filterVehicles(mockVehicles, {});
            (0, vitest_1.expect)(result).toHaveLength(3);
        });
        (0, vitest_1.it)("filters by search on make", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "BMW",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("BMW");
        });
        (0, vitest_1.it)("filters by search on model", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "Golf",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].model).toBe("Golf GTI");
        });
        (0, vitest_1.it)("search is case insensitive", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "bmw",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
        });
        (0, vitest_1.it)("filters by category", () => {
            const result = service.filterVehicles(mockVehicles, {
                category: "hatchback",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].model).toBe("Golf GTI");
        });
        (0, vitest_1.it)("filters by fuelType", () => {
            const result = service.filterVehicles(mockVehicles, {
                fuelType: "electric",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("Tesla");
        });
        (0, vitest_1.it)("filters by maxPrice", () => {
            const result = service.filterVehicles(mockVehicles, {
                maxPrice: 55000,
            });
            (0, vitest_1.expect)(result).toHaveLength(2);
        });
        (0, vitest_1.it)("filters by minPrice", () => {
            const result = service.filterVehicles(mockVehicles, {
                minPrice: 60000,
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("BMW");
        });
        (0, vitest_1.it)("combines multiple filters correctly", () => {
            const result = service.filterVehicles(mockVehicles, {
                fuelType: "petrol",
                maxPrice: 50000,
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].model).toBe("Golf GTI");
        });
        (0, vitest_1.it)("returns empty array when no vehicles match", () => {
            const result = service.filterVehicles(mockVehicles, {
                search: "Ferrari",
            });
            (0, vitest_1.expect)(result).toHaveLength(0);
        });
    });
    (0, vitest_1.describe)("filterOccasions()", () => {
        (0, vitest_1.it)("returns all occasions when no filters applied", () => {
            const result = service.filterOccasions(mockOccasions, {});
            (0, vitest_1.expect)(result).toHaveLength(3);
        });
        (0, vitest_1.it)("filters by search combining make and model", () => {
            const result = service.filterOccasions(mockOccasions, {
                search: "BMW M3",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("BMW");
        });
        (0, vitest_1.it)("filters by maxPrice", () => {
            const result = service.filterOccasions(mockOccasions, {
                maxPrice: 40000,
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("Volkswagen");
        });
        (0, vitest_1.it)("filters by maxMileage", () => {
            const result = service.filterOccasions(mockOccasions, {
                maxMileage: 10000,
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("Tesla");
        });
        (0, vitest_1.it)("filters by transmission", () => {
            const result = service.filterOccasions(mockOccasions, {
                transmission: "manual",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("BMW");
        });
        (0, vitest_1.it)("filters by condition", () => {
            const result = service.filterOccasions(mockOccasions, {
                condition: "demo",
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("Tesla");
        });
        (0, vitest_1.it)("combines multiple filters correctly", () => {
            const result = service.filterOccasions(mockOccasions, {
                transmission: "automatic",
                maxPrice: 40000,
            });
            (0, vitest_1.expect)(result).toHaveLength(1);
            (0, vitest_1.expect)(result[0].make).toBe("Volkswagen");
        });
        (0, vitest_1.it)("returns empty array when no occasions match", () => {
            const result = service.filterOccasions(mockOccasions, {
                search: "Ferrari",
            });
            (0, vitest_1.expect)(result).toHaveLength(0);
        });
    });
});
//# sourceMappingURL=FilterService.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const ConfiguratorService_1 = require("../services/ConfiguratorService");
const mockVehicle = {
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
};
const mockOptions = {
    colors: [
        { id: "c1", name: "Midnight Black", hex: "#1a1a1a", priceModifier: 0 },
        { id: "c2", name: "Portimao Blue", hex: "#2d4a7a", priceModifier: 750 },
    ],
    wheels: [
        { id: "w1", name: 'Standard 18"', sizeInch: 18, priceModifier: 0 },
        { id: "w2", name: 'Sport 19"', sizeInch: 19, priceModifier: 800 },
    ],
    packages: [
        {
            id: "p1",
            name: "Comfort Package",
            description: "Comfort features",
            features: ["Heated seats"],
            priceModifier: 1800,
        },
        {
            id: "p2",
            name: "Sport Package",
            description: "Sport features",
            features: ["Sport exhaust"],
            priceModifier: 3200,
        },
    ],
};
(0, vitest_1.describe)("ConfiguratorService", () => {
    let service;
    (0, vitest_1.beforeEach)(() => {
        service = new ConfiguratorService_1.ConfiguratorService(mockOptions);
    });
    (0, vitest_1.describe)("selectColor()", () => {
        (0, vitest_1.it)("adds colour price modifier to total price", () => {
            const config = service.createConfiguration(mockVehicle);
            const updated = service.selectColor(config, "c2");
            (0, vitest_1.expect)(updated.totalPrice).toBe(85750);
        });
        (0, vitest_1.it)("replaces previous colour without stacking price", () => {
            const config = service.createConfiguration(mockVehicle);
            const withBlue = service.selectColor(config, "c2");
            const withBlack = service.selectColor(withBlue, "c1");
            (0, vitest_1.expect)(withBlack.totalPrice).toBe(85000);
        });
        (0, vitest_1.it)("returns a new object — immutable update", () => {
            const config = service.createConfiguration(mockVehicle);
            const updated = service.selectColor(config, "c1");
            (0, vitest_1.expect)(updated).not.toBe(config);
        });
    });
    (0, vitest_1.describe)("selectWheels()", () => {
        (0, vitest_1.it)("adds wheel price modifier to total price", () => {
            const config = service.createConfiguration(mockVehicle);
            const updated = service.selectWheels(config, "w2");
            (0, vitest_1.expect)(updated.totalPrice).toBe(85800);
        });
        (0, vitest_1.it)("replaces previous wheels without stacking price", () => {
            const config = service.createConfiguration(mockVehicle);
            const withSport = service.selectWheels(config, "w2");
            const withStandard = service.selectWheels(withSport, "w1");
            (0, vitest_1.expect)(withStandard.totalPrice).toBe(85000);
        });
    });
    (0, vitest_1.describe)("togglePackage()", () => {
        (0, vitest_1.it)("adds package price when toggled on", () => {
            const config = service.createConfiguration(mockVehicle);
            const updated = service.togglePackage(config, "p1");
            (0, vitest_1.expect)(updated.totalPrice).toBe(86800);
        });
        (0, vitest_1.it)("removes package price when toggled off", () => {
            const config = service.createConfiguration(mockVehicle);
            const withPackage = service.togglePackage(config, "p1");
            const withoutPackage = service.togglePackage(withPackage, "p1");
            (0, vitest_1.expect)(withoutPackage.totalPrice).toBe(85000);
        });
        (0, vitest_1.it)("stacks multiple packages correctly", () => {
            const config = service.createConfiguration(mockVehicle);
            const with1 = service.togglePackage(config, "p1");
            const with2 = service.togglePackage(with1, "p2");
            (0, vitest_1.expect)(with2.totalPrice).toBe(90000);
        });
        (0, vitest_1.it)("uses filter not splice — selected packages is a new array", () => {
            const config = service.createConfiguration(mockVehicle);
            const withPackage = service.togglePackage(config, "p1");
            const withoutPackage = service.togglePackage(withPackage, "p1");
            (0, vitest_1.expect)(withPackage.selectedPackages).not.toBe(withoutPackage.selectedPackages);
        });
    });
    (0, vitest_1.describe)("price accumulation", () => {
        (0, vitest_1.it)("correctly totals colour + wheels + packages", () => {
            const config = service.createConfiguration(mockVehicle);
            const withColor = service.selectColor(config, "c2");
            const withWheels = service.selectWheels(withColor, "w2");
            const withP1 = service.togglePackage(withWheels, "p1");
            const withP2 = service.togglePackage(withP1, "p2");
            (0, vitest_1.expect)(withP2.totalPrice).toBe(91550);
        });
    });
});
//# sourceMappingURL=ConfiguratorService.test.js.map
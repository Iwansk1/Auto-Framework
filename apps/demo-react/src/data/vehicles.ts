import type { Vehicle } from "@automotive/core";

export const vehicles: Vehicle[] = [
    {
        id: "1",
        make: "BMW",
        model: "M3 Competition",
        year: 2024,
        price: 85900,
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
        features: ["Heated seats", "Navigation", "Carbon roof"],
        imageUrl:
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
    },
    {
        id: "2",
        make: "Tesla",
        model: "Model 3",
        year: 2024,
        price: 52990,
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
        features: ["Autopilot", "Navigation", "Glass roof"],
        imageUrl:
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800",
    },
    {
        id: "3",
        make: "Volkswagen",
        model: "Golf GTI",
        year: 2024,
        price: 42900,
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
        features: ["Parking sensors", "Adaptive cruise", "Navigation"],
        imageUrl:
            "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800",
    },
];

import type { ConfiguratorOptions } from "@automotive/core";

export const configuratorOptions: ConfiguratorOptions = {
    colors: [
        { id: "c1", name: "Midnight Black", hex: "#1a1a1a", priceModifier: 0 },
        { id: "c2", name: "Alpine White", hex: "#f5f5f5", priceModifier: 0 },
        { id: "c3", name: "Portimao Blue", hex: "#2d4a7a", priceModifier: 750 },
        { id: "c4", name: "Melbourne Red", hex: "#c0392b", priceModifier: 750 },
    ],
    wheels: [
        { id: "w1", name: 'Standard 18"', sizeInch: 18, priceModifier: 0 },
        { id: "w2", name: 'Sport 19"', sizeInch: 19, priceModifier: 800 },
        {
            id: "w3",
            name: 'Performance 20"',
            sizeInch: 20,
            priceModifier: 1500,
        },
    ],
    packages: [
        {
            id: "p1",
            name: "Comfort Package",
            description: "Enhanced comfort",
            features: ["Heated seats", "Parking sensors"],
            priceModifier: 1800,
        },
        {
            id: "p2",
            name: "Sport Package",
            description: "Track-focused upgrades",
            features: ["Sport exhaust", "Sport suspension"],
            priceModifier: 3200,
        },
    ],
};

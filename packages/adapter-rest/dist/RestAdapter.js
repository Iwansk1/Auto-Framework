"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestAdapter = void 0;
class RestAdapter {
    constructor({ baseUrl }) {
        if (!baseUrl) {
            throw new Error("RestAdapter: baseUrl is required");
        }
        this.baseUrl = baseUrl.replace(/\/$/, "");
    }
    async fetch(path) {
        try {
            const response = await fetch(`${this.baseUrl}${path}`, {
                cache: "no-store", // prevents stale SSR caching issues
            });
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`RestAdapter: request failed for ${path} — ${response.status}\n${text}`);
            }
            return response.json();
        }
        catch (error) {
            console.error("RestAdapter fetch error:", error);
            throw error;
        }
    }
    async getVehicles() {
        const result = await this.fetch("/api/vehicles?limit=100&depth=1");
        return result.docs.map((doc) => ({
            id: String(doc.id),
            make: doc.make,
            model: doc.model,
            year: doc.year,
            price: doc.price,
            category: doc.category,
            fuelType: doc.fuelType,
            specs: {
                horsepower: doc.specs.horsepower,
                torque: doc.specs.torque,
                acceleration: doc.specs.acceleration,
                topSpeed: doc.specs.topSpeed,
                fuelEfficiency: doc.specs.fuelEfficiency,
                range: doc.specs.range,
            },
            features: doc.features?.map((f) => f.feature) ?? [],
            imageUrl: doc.image?.url ? `${this.baseUrl}${doc.image.url}` : undefined,
        }));
    }
    async getOccasions() {
        const result = await this.fetch("/api/occasions?limit=100&depth=1&where[available][equals]=true");
        return result.docs.map((doc) => ({
            id: String(doc.id),
            make: doc.make,
            model: doc.model,
            year: doc.year,
            askingPrice: doc.askingPrice,
            mileage: doc.mileage,
            colour: doc.colour,
            transmission: doc.transmission,
            condition: doc.condition,
            features: doc.features?.map((f) => f.feature) ?? [],
            images: doc.images?.map((img) => ({
                url: typeof img.image === "object" && img.image?.url ? `${this.baseUrl}${img.image.url}` : "",
                caption: img.caption ?? undefined,
            })) ?? [],
            description: doc.description ?? undefined,
            available: doc.available,
        }));
    }
    async getConfiguratorOptions() {
        const [coloursResult, wheelsResult, packagesResult] = await Promise.all([
            this.fetch("/api/colours?limit=50"),
            this.fetch("/api/wheels?limit=50"),
            this.fetch("/api/packages?limit=50"),
        ]);
        return {
            colours: coloursResult.docs.map((doc) => ({
                id: String(doc.id),
                name: doc.name,
                hex: doc.hex,
                priceModifier: doc.priceModifier,
            })),
            wheels: wheelsResult.docs.map((doc) => ({
                id: String(doc.id),
                name: doc.name,
                sizeInch: doc.sizeInch,
                priceModifier: doc.priceModifier,
            })),
            packages: packagesResult.docs.map((doc) => ({
                id: String(doc.id),
                name: doc.name,
                description: doc.description,
                features: doc.features?.map((f) => f.feature) ?? [],
                priceModifier: doc.priceModifier,
            })),
        };
    }
}
exports.RestAdapter = RestAdapter;

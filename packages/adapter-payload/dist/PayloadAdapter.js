"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadAdapter = void 0;
class PayloadAdapter {
    constructor({ payload, serverUrl }) {
        this.payload = payload;
        this.serverUrl = serverUrl;
    }
    async getVehicles() {
        const result = await this.payload.find({
            collection: "vehicles",
            limit: 100,
        });
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
            imageUrl: doc.image && typeof doc.image === "object" ? (doc.image.url ?? undefined) : undefined,
        }));
    }
    async getOccasions() {
        const result = await this.payload.find({
            collection: "occasions",
            where: { available: { equals: true } },
            limit: 100,
        });
        return result.docs.map((doc) => ({
            id: String(doc.id),
            make: doc.make,
            model: doc.model,
            year: doc.year,
            askingPrice: doc.askingPrice,
            mileage: doc.mileage,
            color: doc.color,
            transmission: doc.transmission,
            condition: doc.condition,
            features: doc.features?.map((f) => f.feature) ?? [],
            images: doc.images?.map((img) => ({
                url: typeof img.image === "object" && img.image.url ? (img.image.url ?? "") : "",
                caption: img.caption ?? undefined,
            })) ?? [],
            description: doc.description ?? undefined,
            available: doc.available,
        }));
    }
    async getConfiguratorOptions() {
        const [coloursResult, wheelsResult, packagesResult] = await Promise.all([
            this.payload.find({ collection: "colors", limit: 50 }),
            this.payload.find({ collection: "wheels", limit: 50 }),
            this.payload.find({ collection: "packages", limit: 50 }),
        ]);
        return {
            colors: coloursResult.docs.map((doc) => ({
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
exports.PayloadAdapter = PayloadAdapter;

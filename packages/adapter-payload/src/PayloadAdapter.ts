import { AutomotiveAdapter, Vehicle, Occasion, ConfiguratorOptions } from "@automotive/core";

interface PayloadMedia {
    url?: string | null;
}

interface PayloadVehicle {
    id: string | number;
    make: string;
    model: string;
    year: number;
    price: number;
    category: string;
    fuelType: string;
    image?: PayloadMedia | string | null;
    features?: { feature: string }[] | null;
    specs: {
        horsepower: number;
        torque: number;
        acceleration: number;
        topSpeed: number;
        fuelEfficiency: number;
        range: number;
    };
}

interface PayloadOccasion {
    id: string | number;
    make: string;
    model: string;
    year: number;
    askingPrice: number;
    mileage: number;
    colour: string;
    transmission: "automatic" | "manual";
    condition: "new" | "used" | "demo";
    features?: { feature: string }[] | null;
    images?: { image: PayloadMedia | string; caption?: string | null }[] | null;
    description?: string | null;
    available: boolean;
}

interface PayloadColour {
    id: string | number;
    name: string;
    hex: string;
    priceModifier: number;
}

interface PayloadWheel {
    id: string | number;
    name: string;
    sizeInch: number;
    priceModifier: number;
}

interface PayloadPackage {
    id: string | number;
    name: string;
    description: string;
    features?: { feature: string }[] | null;
    priceModifier: number;
}

interface PayloadClient {
    find(args: { collection: string; where?: Record<string, unknown>; limit?: number }): Promise<{ docs: unknown[] }>;
}

interface PayloadAdapterOptions {
    payload: PayloadClient;
    serverUrl: string;
}

export class PayloadAdapter implements AutomotiveAdapter {
    private payload: PayloadClient;
    private serverUrl: string;

    constructor({ payload, serverUrl }: PayloadAdapterOptions) {
        this.payload = payload;
        this.serverUrl = serverUrl;
    }

    async getVehicles(): Promise<Vehicle[]> {
        const result = await this.payload.find({
            collection: "vehicles",
            limit: 100,
        });

        return (result.docs as PayloadVehicle[]).map((doc) => ({
            id: String(doc.id),
            make: doc.make,
            model: doc.model,
            year: doc.year,
            price: doc.price,
            category: doc.category as Vehicle["category"],
            fuelType: doc.fuelType as Vehicle["fuelType"],
            specs: {
                horsepower: doc.specs.horsepower,
                torque: doc.specs.torque,
                acceleration: doc.specs.acceleration,
                topSpeed: doc.specs.topSpeed,
                fuelEfficiency: doc.specs.fuelEfficiency,
                range: doc.specs.range,
            },
            features: doc.features?.map((f) => f.feature) ?? [],
            imageUrl: doc.image && typeof doc.image === "object" ? ((doc.image as PayloadMedia).url ?? undefined) : undefined,
        })) as Vehicle[];
    }

    async getOccasions(): Promise<Occasion[]> {
        const result = await this.payload.find({
            collection: "occasions",
            where: { available: { equals: true } },
            limit: 100,
        });

        return (result.docs as PayloadOccasion[]).map((doc) => ({
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
            images:
                doc.images?.map((img) => ({
                    url: typeof img.image === "object" && (img.image as PayloadMedia).url ? ((img.image as PayloadMedia).url ?? "") : "",
                    caption: img.caption ?? undefined,
                })) ?? [],
            description: doc.description ?? undefined,
            available: doc.available,
        }));
    }

    async getConfiguratorOptions(): Promise<ConfiguratorOptions> {
        const [coloursResult, wheelsResult, packagesResult] = await Promise.all([
            this.payload.find({ collection: "colors", limit: 50 }),
            this.payload.find({ collection: "wheels", limit: 50 }),
            this.payload.find({ collection: "packages", limit: 50 }),
        ]);

        return {
            colours: (coloursResult.docs as PayloadColour[]).map((doc) => ({
                id: String(doc.id),
                name: doc.name,
                hex: doc.hex,
                priceModifier: doc.priceModifier,
            })),
            wheels: (wheelsResult.docs as PayloadWheel[]).map((doc) => ({
                id: String(doc.id),
                name: doc.name,
                sizeInch: doc.sizeInch,
                priceModifier: doc.priceModifier,
            })),
            packages: (packagesResult.docs as PayloadPackage[]).map((doc) => ({
                id: String(doc.id),
                name: doc.name,
                description: doc.description,
                features: doc.features?.map((f) => f.feature) ?? [],
                priceModifier: doc.priceModifier,
            })),
        };
    }
}

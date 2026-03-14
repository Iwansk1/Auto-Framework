import {
    AutomotiveAdapter,
    Vehicle,
    Occasion,
    ConfiguratorOptions,
} from "@automotive/core";

interface RestAdapterOptions {
    baseUrl: string; // e.g. http://localhost:3000
}

interface PayloadRestResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    page: number;
}

interface RestVehicle {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    category: string;
    fuelType: string;
    image?: { url?: string } | null;
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

interface RestOccasion {
    id: string;
    make: string;
    model: string;
    year: number;
    askingPrice: number;
    mileage: number;
    color: string;
    transmission: "automatic" | "manual";
    condition: "new" | "used" | "demo";
    features?: { feature: string }[] | null;
    images?:
        | { image: { url?: string } | string; caption?: string | null }[]
        | null;
    description?: string | null;
    available: boolean;
}

interface RestColour {
    id: string;
    name: string;
    hex: string;
    priceModifier: number;
}

interface RestWheel {
    id: string;
    name: string;
    sizeInch: number;
    priceModifier: number;
}

interface RestPackage {
    id: string;
    name: string;
    description: string;
    features?: { feature: string }[] | null;
    priceModifier: number;
}

export class RestAdapter implements AutomotiveAdapter {
    private baseUrl: string;

    constructor({ baseUrl }: RestAdapterOptions) {
        this.baseUrl = baseUrl.replace(/\/$/, ""); // strip trailing slash
    }

    private async fetch<T>(path: string): Promise<PayloadRestResponse<T>> {
        const response = await fetch(`${this.baseUrl}${path}`);
        if (!response.ok) {
            throw new Error(
                `RestAdapter: request failed for ${path} — ${response.status}`,
            );
        }
        return response.json();
    }

    async getVehicles(): Promise<Vehicle[]> {
        const result = await this.fetch<RestVehicle>(
            "/api/vehicles?limit=100&depth=1",
        );

        return result.docs.map((doc) => ({
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
            imageUrl: doc.image?.url
                ? `${this.baseUrl}${doc.image.url}`
                : undefined,
        })) as Vehicle[];
    }

    async getOccasions(): Promise<Occasion[]> {
        const result = await this.fetch<RestOccasion>(
            "/api/occasions?limit=100&depth=1&where[available][equals]=true",
        );

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
            images:
                doc.images?.map((img) => ({
                    url:
                        typeof img.image === "object" && img.image?.url
                            ? `${this.baseUrl}${img.image.url}`
                            : "",
                    caption: img.caption ?? undefined,
                })) ?? [],
            description: doc.description ?? undefined,
            available: doc.available,
        }));
    }

    async getConfiguratorOptions(): Promise<ConfiguratorOptions> {
        const [coloursResult, wheelsResult, packagesResult] = await Promise.all(
            [
                this.fetch<RestColour>("/api/colours?limit=50"),
                this.fetch<RestWheel>("/api/wheels?limit=50"),
                this.fetch<RestPackage>("/api/packages?limit=50"),
            ],
        );

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

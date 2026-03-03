import { getPayloadClient } from "./payload";
import { ConfiguratorOptions } from "@automotive/core";
import type {
    PayloadColor,
    PayloadWheel,
    PayloadPackage,
} from "@/payload-types";

export async function getConfiguratorOptions(): Promise<ConfiguratorOptions> {
    const payload = await getPayloadClient();

    const [colorsResult, wheelsResult, packagesResult] = await Promise.all([
        payload.find({ collection: "colors", limit: 50 }),
        payload.find({ collection: "wheels", limit: 50 }),
        payload.find({ collection: "packages", limit: 50 }),
    ]);

    return {
        colors: colorsResult.docs.map((doc: PayloadColor) => ({
            id: String(doc.id),
            name: doc.name,
            hex: doc.hex,
            priceModifier: doc.priceModifier,
        })),
        wheels: wheelsResult.docs.map((doc: PayloadWheel) => ({
            id: String(doc.id),
            name: doc.name,
            sizeInch: doc.sizeInch,
            priceModifier: doc.priceModifier,
        })),
        packages: packagesResult.docs.map((doc: PayloadPackage) => ({
            id: String(doc.id),
            name: doc.name,
            description: doc.description,
            features: doc.features?.map((f) => f.feature) ?? [],
            priceModifier: doc.priceModifier,
        })),
    };
}

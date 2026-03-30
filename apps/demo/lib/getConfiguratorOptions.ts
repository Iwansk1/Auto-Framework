/**
 * @deprecated
 * This file has been superseded by @automotive/adapter-payload.
 * Kept for reference and school documentation purposes.
 */
import { getPayloadClient } from "./payload";
import { ConfiguratorOptions } from "@automotive/core";
import type { Colour, Wheel, Package } from "@/payload-types";
export async function getConfiguratorOptions(): Promise<ConfiguratorOptions> {
    const payload = await getPayloadClient();

    const [coloursResult, wheelsResult, packagesResult] = await Promise.all([
        payload.find({ collection: "colours", limit: 50 }),
        payload.find({ collection: "wheels", limit: 50 }),
        payload.find({ collection: "packages", limit: 50 }),
    ]);

    return {
        colours: coloursResult.docs.map((doc: Colour) => ({
            id: String(doc.id),
            name: doc.name,
            hex: doc.hex,
            priceModifier: doc.priceModifier,
        })),
        wheels: wheelsResult.docs.map((doc: Wheel) => ({
            id: String(doc.id),
            name: doc.name,
            sizeInch: doc.sizeInch,
            priceModifier: doc.priceModifier,
        })),
        packages: packagesResult.docs.map((doc: Package) => ({
            id: String(doc.id),
            name: doc.name,
            description: doc.description,
            features: doc.features?.map((f) => f.feature) ?? [],
            priceModifier: doc.priceModifier,
        })),
    };
}

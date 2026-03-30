/**
 * @deprecated
 * This file has been superseded by @automotive/adapter-payload.
 * Kept for reference and school documentation purposes.
 */
import { getPayloadClient } from "./payload";
import { Occasion } from "@automotive/core";
import type { Occasion as PayloadOccasion, Media } from "@/payload-types";

export async function getOccasions(): Promise<Occasion[]> {
    const payload = await getPayloadClient();

    const result = await payload.find({
        collection: "occasions",
        where: {
            available: {
                equals: true,
            },
        },
        limit: 100,
    });

    return result.docs.map((doc: PayloadOccasion) => ({
        id: String(doc.id),
        make: doc.make,
        model: doc.model,
        year: Number(doc.year),
        askingPrice: doc.askingPrice,
        mileage: doc.mileage,
        colour: doc.Colour,
        transmission: doc.transmission,
        condition: doc.condition,
        features: doc.features?.map((f) => f.feature ?? "").filter(Boolean) ?? [],
        images:
            doc.images?.map((img) => ({
                url: typeof img.image === "object" ? ((img.image as Media).url ?? "") : "",
                caption: img.caption ?? undefined,
            })) ?? [],
        description: doc.description ?? undefined,
        available: doc.available ?? false,
    })) as Occasion[];
}

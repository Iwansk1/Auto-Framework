import { getPayloadClient } from "./payload";
import { Occasion } from "@automotive/core";
import type { PayloadOccasion, Media } from "@/payload-types";

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
        year: doc.year,
        askingPrice: doc.askingPrice,
        mileage: doc.mileage,
        color: doc.colour,
        transmission: doc.transmission,
        condition: doc.condition,
        features: doc.features?.map((f) => f.feature) ?? [],
        images:
            doc.images?.map((img) => ({
                url:
                    typeof img.image === "object"
                        ? `${process.env.NEXT_PUBLIC_SERVER_URL}${(img.image as Media).url}`
                        : "",
                caption: img.caption ?? undefined,
            })) ?? [],
        description: doc.description ?? undefined,
        available: doc.available,
    }));
}

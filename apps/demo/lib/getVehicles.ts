/**
 * @deprecated
 * This file has been superseded by @automotive/adapter-payload.
 * Kept for reference and school documentation purposes.
 */
import { getPayloadClient } from "./payload";
import { Vehicle } from "@automotive/core";
import type { PayloadVehicle, Media } from "../payload-types";

export async function getVehicles(): Promise<Vehicle[]> {
    const payload = await getPayloadClient();

    const result = await payload.find({
        collection: "vehicles",
        limit: 100,
    });

    return result.docs.map((doc: PayloadVehicle) => ({
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
        imageUrl: doc.image && typeof doc.image === "object" ? `${process.env.NEXT_PUBLIC_SERVER_URL}${(doc.image as Media).url}` : undefined,
    })) as Vehicle[];
}

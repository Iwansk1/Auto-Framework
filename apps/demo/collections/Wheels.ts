import type { CollectionConfig } from "payload";

export const Wheels: CollectionConfig = {
    slug: "wheels",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "sizeInch", "priceModifier"],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "sizeInch",
            type: "number",
            required: true,
            min: 14,
            max: 24,
            admin: {
                description: "Wheel diameter in inches",
            },
        },
        {
            name: "priceModifier",
            type: "number",
            required: true,
            defaultValue: 0,
            min: 0,
            admin: {
                description:
                    "Additional cost in EUR. Use 0 for included wheels.",
            },
        },
    ],
};

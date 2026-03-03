import type { CollectionConfig } from "payload";

export const Packages: CollectionConfig = {
    slug: "packages",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "priceModifier"],
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
            name: "description",
            type: "text",
            required: true,
        },
        {
            name: "features",
            type: "array",
            required: true,
            fields: [
                {
                    name: "feature",
                    type: "text",
                    required: true,
                },
            ],
        },
        {
            name: "priceModifier",
            type: "number",
            required: true,
            defaultValue: 0,
            min: 0,
            admin: {
                description: "Additional cost in EUR",
            },
        },
    ],
};

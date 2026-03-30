import type { CollectionConfig } from "payload";

export const Colours: CollectionConfig = {
    slug: "colours",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "hex", "priceModifier"],
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
            name: "hex",
            type: "text",
            required: true,
            admin: {
                description: "Hex color code e.g. #1a1a1a",
            },
        },
        {
            name: "priceModifier",
            type: "number",
            required: true,
            defaultValue: 0,
            min: 0,
            admin: {
                description: "Additional cost in EUR. Use 0 for included colors",
            },
        },
    ],
};

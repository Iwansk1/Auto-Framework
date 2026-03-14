import type { CollectionConfig } from "payload";

export const Occasions: CollectionConfig = {
    slug: "occasions",
    admin: {
        useAsTitle: "make",
        defaultColumns: [
            "make",
            "model",
            "year",
            "askingPrice",
            "mileage",
            "available",
        ],
    },
    access: {
        read: () => true,
    },
    fields: [
        // Vehicle info
        {
            name: "make",
            type: "text",
            required: true,
            admin: {
                description: "Brand: BMW, Volkswagen etc",
            },
        },
        {
            name: "model",
            type: "text",
            required: true,
            admin: {
                description: "Model: M3, Golf GTI",
            },
        },
        {
            name: "year",
            type: "text",
            required: true,
            admin: {
                description: "Year of registration",
            },
        },
        // Pricing
        {
            name: "askingPrice",
            type: "number",
            required: true,
            admin: {
                description: "Asking price in EURO",
            },
        },
        // Vehicle Details
        {
            name: "mileage",
            type: "number",
            required: true,
            min: 0,
            admin: {
                description: "Mileage in KM",
            },
        },
        {
            name: "Color",
            type: "text",
            required: true,
        },
        {
            name: "transmission",
            type: "select",
            required: true,
            options: [
                { label: "Automatic", value: "automatic" },
                { label: "Manual", value: "manual" },
            ],
        },
        {
            name: "condition",
            type: "select",
            required: true,
            options: [
                { label: "New", value: "new" },
                { label: "Used", value: "used" },
                { label: "Demo", value: "demo" },
            ],
        },
        // Free text Features
        {
            name: "featuresText",
            type: "textarea",
            admin: {
                description:
                    "Type one feature per line. Each line becomes a separate bullet point on the website.",
            },
            hooks: {
                afterRead: [
                    ({ siblingData }) => {
                        if (siblingData?.features?.length > 0) {
                            return siblingData.features
                                .map((f: { feature: string }) => f.feature)
                                .join("\n");
                        }
                        return "";
                    },
                ],
                beforeChange: [
                    ({ value, siblingData }) => {
                        if (typeof value === "string") {
                            siblingData.features = value
                                .split("\n")
                                .map((line: string) => line.trim())
                                .filter((line: string) => line.length > 0)
                                .map((line: string) => ({ feature: line }));
                        }
                        return value;
                    },
                ],
            },
        },
        // Stores the parsed features — hidden from admin UI
        {
            name: "features",
            type: "array",
            admin: {
                hidden: true,
            },
            fields: [
                {
                    name: "feature",
                    type: "text",
                    required: false,
                },
            ],
        },
        // Images
        {
            name: "images",
            type: "array",
            admin: {
                description: "Upload your images here",
            },
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "caption",
                    type: "text",
                    admin: {
                        description: 'Optional "interior" or "Front view"',
                    },
                },
            ],
        },
        // Description
        {
            name: "description",
            type: "textarea",
            admin: {
                description: "Additional notes about this car",
            },
        },
        // Availability
        {
            name: "available",
            type: "checkbox",
            defaultValue: true,
            admin: {
                description: "Uncheck when this car has been sold",
            },
        },
    ],
};

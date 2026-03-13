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
            name: "features",
            type: "array",
            admin: {
                description: "Add any features this car has",
            },
            fields: [
                {
                    name: "feature",
                    type: "text",
                    required: true,
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

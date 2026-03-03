import type { CollectionConfig } from "payload";

export const Vehicles: CollectionConfig = {
    slug: "vehicles",
    admin: {
        useAsTitle: "model",
        defaultColumns: [
            "make",
            "model",
            "year",
            "category",
            "fuelType",
            "price",
        ],
    },
    access: {
        read: () => true,
    },
    fields: [
        // ─── Basic Info ───────────────────────────────────────────────────────
        {
            name: "make",
            type: "text",
            required: true,
        },
        {
            name: "model",
            type: "text",
            required: true,
        },
        {
            name: "year",
            type: "number",
            required: true,
            min: 1900,
            max: 2100,
        },
        {
            name: "price",
            type: "number",
            required: true,
            min: 0,
        },
        {
            name: "category",
            type: "select",
            required: true,
            options: [
                { label: "Sedan", value: "sedan" },
                { label: "SUV", value: "suv" },
                { label: "Hatchback", value: "hatchback" },
                { label: "Coupe", value: "coupe" },
                { label: "Stationwagen", value: "stationwagen" },
                { label: "MPV", value: "mpv" },
            ],
        },
        {
            name: "fuelType",
            type: "select",
            required: true,
            options: [
                { label: "Petrol", value: "petrol" },
                { label: "Diesel", value: "diesel" },
                { label: "Electric", value: "electric" },
                { label: "Hybrid", value: "hybrid" },
            ],
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: false,
        },
        {
            name: "features",
            type: "array",
            fields: [
                {
                    name: "feature",
                    type: "text",
                    required: true,
                },
            ],
        },

        // ─── Specs ────────────────────────────────────────────────────────────
        {
            name: "specs",
            type: "group",
            fields: [
                {
                    name: "horsepower",
                    type: "number",
                    required: true,
                    min: 0,
                },
                {
                    name: "torque",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: { description: "Nm" },
                },
                {
                    name: "acceleration",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: { description: "0-100 km/h in seconds" },
                },
                {
                    name: "topSpeed",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: { description: "km/h" },
                },
                {
                    name: "fuelEfficiency",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: { description: "L/100km or kWh/100km for electric" },
                },
                {
                    name: "range",
                    type: "number",
                    required: true,
                    min: 0,
                    admin: { description: "km" },
                },
            ],
        },
    ],
};

"use client";

import { useField } from "@payloadcms/ui";

interface Feature {
    feature: string;
    id?: string | null;
}

export function FeaturesField({ path }: { path: string }) {
    const { value, setValue } = useField<Feature[]>({ path });

    const textValue = (value ?? []).map((f) => f.feature).join("\n");

    const handleChange = (raw: string) => {
        const features: Feature[] = raw
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0)
            .map((line) => ({ feature: line }));
        setValue(features);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                Features
            </label>
            <p style={{ fontSize: "0.75rem", color: "#888", margin: 0 }}>
                Type one feature per line. Each line becomes a separate bullet
                point.
            </p>
            <textarea
                value={textValue}
                onChange={(e) => handleChange(e.target.value)}
                rows={8}
                placeholder={`Airco\nAdaptieve cruise control\nTrekhaak\nNieuw APK`}
                style={{
                    width: "100%",
                    padding: "10px 12px",
                    background: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    resize: "vertical",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                }}
            />
        </div>
    );
}

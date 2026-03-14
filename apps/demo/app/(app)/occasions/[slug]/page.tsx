"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOccasions } from "@automotive/react";

interface OccasionDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default function OccasionDetailPage({
    params,
}: OccasionDetailPageProps) {
    const { slug } = use(params);

    // get ID from the slug
    const id = slug.split("-").pop();

    const { occasions, formattedPrice, formattedMileage } = useOccasions();

    const occasion = occasions.find((o) => o.id === id);

    if (!occasion) {
        return (
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "96px 24px",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{ color: "var(--color-text)", marginBottom: "16px" }}
                >
                    Occasion not found
                </h1>
                <Link
                    href="/occasions"
                    style={{ color: "var(--color-accent)" }}
                >
                    Back to occasions
                </Link>
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "48px 24px",
            }}
        >
            {/* Back link */}
            <Link
                href="/occasions"
                style={{
                    color: "var(--color-muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "32px",
                }}
            >
                ← Back to occasions
            </Link>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 380px",
                    gap: "40px",
                    alignItems: "start",
                }}
            >
                {/* Left column — images + details */}
                <div>
                    {/* Main image */}
                    <div
                        style={{
                            position: "relative",
                            height: "420px",
                            background: "var(--color-surface)",
                            borderRadius: "12px",
                            overflow: "hidden",
                            marginBottom: "12px",
                        }}
                    >
                        {occasion.images.length > 0 ? (
                            <Image
                                src={occasion.images[0].url}
                                alt={`${occasion.make} ${occasion.model}`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        ) : (
                            <div
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--color-muted)",
                                }}
                            >
                                No image available
                            </div>
                        )}
                        <span
                            style={{
                                position: "absolute",
                                top: "16px",
                                left: "16px",
                                background:
                                    occasion.condition === "new"
                                        ? "#2d6a4f"
                                        : occasion.condition === "demo"
                                          ? "#2d4a7a"
                                          : "var(--color-carbon)",
                                color: "#fff",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                padding: "5px 12px",
                                borderRadius: "4px",
                            }}
                        >
                            {occasion.condition}
                        </span>
                    </div>

                    {/* Thumbnail strip */}
                    {occasion.images.length > 1 && (
                        <div
                            style={{
                                display: "flex",
                                gap: "8px",
                                marginBottom: "32px",
                            }}
                        >
                            {occasion.images.slice(1).map((img, i) => (
                                <div
                                    key={i}
                                    style={{
                                        position: "relative",
                                        width: "100px",
                                        height: "70px",
                                        borderRadius: "6px",
                                        overflow: "hidden",
                                        border: "1px solid var(--color-border)",
                                    }}
                                >
                                    <Image
                                        src={img.url}
                                        alt={img.caption ?? `Photo ${i + 2}`}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Specs grid */}
                    <div
                        style={{
                            background: "var(--color-panel)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "12px",
                            padding: "24px",
                            marginBottom: "24px",
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "var(--color-text)",
                                marginBottom: "20px",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Vehicle Details
                        </h2>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "16px",
                            }}
                        >
                            {[
                                { label: "Make", value: occasion.make },
                                { label: "Model", value: occasion.model },
                                { label: "Year", value: occasion.year },
                                {
                                    label: "Mileage",
                                    value: formattedMileage(occasion.mileage),
                                },
                                { label: "Colour", value: occasion.color },
                                {
                                    label: "Transmission",
                                    value:
                                        occasion.transmission
                                            .charAt(0)
                                            .toUpperCase() +
                                        occasion.transmission.slice(1),
                                },
                                {
                                    label: "Condition",
                                    value:
                                        occasion.condition
                                            .charAt(0)
                                            .toUpperCase() +
                                        occasion.condition.slice(1),
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    style={{
                                        padding: "12px",
                                        background: "var(--color-surface)",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "block",
                                            color: "var(--color-muted)",
                                            fontSize: "0.7rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                    <span
                                        style={{
                                            color: "var(--color-text)",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    {occasion.features.length > 0 && (
                        <div
                            style={{
                                background: "var(--color-panel)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "12px",
                                padding: "24px",
                                marginBottom: "24px",
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "var(--color-text)",
                                    marginBottom: "16px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                Features
                            </h2>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                }}
                            >
                                {occasion.features.map((feature) => (
                                    <span
                                        key={feature}
                                        style={{
                                            background:
                                                "var(--color-accent-dim)",
                                            color: "var(--color-accent)",
                                            fontSize: "0.85rem",
                                            padding: "6px 14px",
                                            borderRadius: "6px",
                                        }}
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    {occasion.description && (
                        <div
                            style={{
                                background: "var(--color-panel)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "12px",
                                padding: "24px",
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "var(--color-text)",
                                    marginBottom: "16px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                Description
                            </h2>
                            <p
                                style={{
                                    color: "var(--color-muted)",
                                    lineHeight: 1.7,
                                    fontSize: "0.95rem",
                                }}
                            >
                                {occasion.description}
                            </p>
                        </div>
                    )}
                </div>

                {/* Right column — sticky price card */}
                <div style={{ position: "sticky", top: "24px" }}>
                    <div
                        style={{
                            background: "var(--color-panel)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "12px",
                            padding: "28px",
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.6rem",
                                fontWeight: 700,
                                color: "var(--color-text)",
                                marginBottom: "8px",
                            }}
                        >
                            {occasion.make} {occasion.model}
                        </h1>
                        <p
                            style={{
                                color: "var(--color-muted)",
                                marginBottom: "24px",
                            }}
                        >
                            {occasion.year} ·{" "}
                            {formattedMileage(occasion.mileage)}
                        </p>
                        <p
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "2.2rem",
                                fontWeight: 700,
                                color: "var(--color-accent)",
                                marginBottom: "28px",
                            }}
                        >
                            {formattedPrice(occasion.askingPrice)}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                            }}
                        >
                            <button
                                style={{
                                    background: "var(--color-accent)",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "14px",
                                    color: "#000",
                                    fontWeight: 700,
                                    fontSize: "0.95rem",
                                    cursor: "pointer",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                CONTACT DEALER
                            </button>
                            <button
                                style={{
                                    background: "transparent",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "8px",
                                    padding: "14px",
                                    color: "var(--color-text)",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                    cursor: "pointer",
                                }}
                            >
                                Schedule Test Drive
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

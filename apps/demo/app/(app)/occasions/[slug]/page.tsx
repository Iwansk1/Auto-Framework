"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOccasions } from "@automotive/react";
import { ContactForm } from "../../components/ContactForm";

interface OccasionDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default function OccasionDetailPage({ params }: OccasionDetailPageProps) {
    const { slug } = use(params);
    const id = slug.split("-").pop();

    const { occasions, formattedPrice, formattedMileage } = useOccasions();
    const occasion = occasions.find((o) => o.id === id);

    const [activeImage, setActiveImage] = useState(0);

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
                <h1 style={{ color: "var(--color-text)", marginBottom: "16px" }}>Occasion not found</h1>
                <Link href="/occasions" style={{ color: "var(--color-accent)" }}>
                    Back to occasions
                </Link>
            </div>
        );
    }

    const images = occasion.images;
    const hasImages = images.length > 0;

    const prev = () => setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1));

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
                    {/* Main image with arrows */}
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
                        {hasImages ? (
                            <>
                                <Image
                                    src={images[activeImage].url}
                                    alt={images[activeImage].caption ?? `${occasion.make} ${occasion.model}`}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 1280px) 60vw, 720px"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "16px",
                                        right: "16px",
                                        background: "rgba(0,0,0,0.6)",
                                        color: "#fff",
                                        fontSize: "0.8rem",
                                        padding: "4px 10px",
                                        borderRadius: "20px",
                                    }}
                                >
                                    {activeImage + 1} / {images.length}
                                </div>

                                {/* Condition badge */}
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

                                {/* Arrow buttons — only show if more than one image */}
                                {images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prev}
                                            aria-label="Previous image"
                                            style={{
                                                position: "absolute",
                                                left: "12px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                background: "rgba(0,0,0,0.5)",
                                                border: "none",
                                                borderRadius: "50%",
                                                width: "40px",
                                                height: "40px",
                                                color: "#fff",
                                                fontSize: "1.1rem",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={next}
                                            aria-label="Next image"
                                            style={{
                                                position: "absolute",
                                                right: "12px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                background: "rgba(0,0,0,0.5)",
                                                border: "none",
                                                borderRadius: "50%",
                                                width: "40px",
                                                height: "40px",
                                                color: "#fff",
                                                fontSize: "1.1rem",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            ›
                                        </button>
                                    </>
                                )}
                            </>
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
                    </div>
                    {/* Thumbnail strip */}
                    {images.length > 1 && (
                        <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    aria-label={`View image ${i + 1}`}
                                    style={{
                                        position: "relative",
                                        width: "80px",
                                        height: "60px",
                                        borderRadius: "6px",
                                        overflow: "hidden",
                                        border: i === activeImage ? "2px solid var(--color-accent)" : "2px solid transparent",
                                        cursor: "pointer",
                                        padding: 0,
                                        background: "var(--color-surface)",
                                    }}
                                >
                                    <Image src={img.url} alt={img.caption ?? `Photo ${i + 1}`} fill style={{ objectFit: "cover" }} />
                                </button>
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
                                { label: "Colour", value: occasion.colour },
                                {
                                    label: "Transmission",
                                    value: occasion.transmission.charAt(0).toUpperCase() + occasion.transmission.slice(1),
                                },
                                {
                                    label: "Condition",
                                    value: occasion.condition.charAt(0).toUpperCase() + occasion.condition.slice(1),
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
                                            background: "var(--color-accent-dim)",
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
                            {occasion.year} · {formattedMileage(occasion.mileage)}
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

                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <ContactForm occasion={occasion} formattedPrice={formattedPrice(occasion.askingPrice)} />
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

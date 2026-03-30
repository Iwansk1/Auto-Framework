"use client";

import { Occasions } from "@/collections/Occasions";
import { useOccasions } from "@automotive/react";
import Image from "next/image";
import Link from "next/link";

export default function OccasionsPage() {
    const { filteredOccasions, filters, updateFilter, resetFilters, formattedPrice, formattedMileage, totalCount, filteredCount, isFiltered } =
        useOccasions();

    return (
        <div
            style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "48px 24px",
            }}
        >
            {/* Header */}
            <div style={{ marginBottom: "48px" }}>
                <h1
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        marginBottom: "8px",
                    }}
                >
                    Occasions
                </h1>
                <p style={{ color: "var(--color-muted)" }}>
                    {isFiltered ? `${filteredCount} of ${totalCount} cars match your filters` : `${totalCount} cars available`}
                </p>
            </div>

            {/* Filters */}
            <div
                style={{
                    background: "var(--color-panel)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "40px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                    alignItems: "end",
                }}
            >
                {/* Search */}
                <div style={{ gridColumn: "span 2" }}>
                    <label
                        style={{
                            display: "block",
                            color: "var(--color-muted)",
                            fontSize: "0.75rem",
                            marginBottom: "6px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Search
                    </label>
                    <input
                        type="text"
                        placeholder="Search make, model..."
                        value={filters.search ?? ""}
                        onChange={(e) => updateFilter("search", e.target.value || undefined)}
                        style={{
                            width: "100%",
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            color: "var(--color-text)",
                            fontSize: "0.95rem",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    />
                </div>

                {/* Max Price */}
                <div>
                    <label
                        style={{
                            display: "block",
                            color: "var(--color-muted)",
                            fontSize: "0.75rem",
                            marginBottom: "6px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Max Price (EUR)
                    </label>
                    <input
                        type="number"
                        placeholder="e.g. 50000"
                        value={filters.maxPrice ?? ""}
                        onChange={(e) => updateFilter("maxPrice", e.target.value ? Number(e.target.value) : undefined)}
                        style={{
                            width: "100%",
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            color: "var(--color-text)",
                            fontSize: "0.95rem",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    />
                </div>

                {/* Max Mileage */}
                <div>
                    <label
                        style={{
                            display: "block",
                            color: "var(--color-muted)",
                            fontSize: "0.75rem",
                            marginBottom: "6px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Max Mileage (km)
                    </label>
                    <input
                        type="number"
                        placeholder="e.g. 100000"
                        value={filters.maxMileage ?? ""}
                        onChange={(e) => updateFilter("maxMileage", e.target.value ? Number(e.target.value) : undefined)}
                        style={{
                            width: "100%",
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            color: "var(--color-text)",
                            fontSize: "0.95rem",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    />
                </div>

                {/* Transmission */}
                <div>
                    <label
                        style={{
                            display: "block",
                            color: "var(--color-muted)",
                            fontSize: "0.75rem",
                            marginBottom: "6px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Transmission
                    </label>
                    <select
                        value={filters.transmission ?? ""}
                        onChange={(e) => updateFilter("transmission", e.target.value || undefined)}
                        style={{
                            width: "100%",
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            color: filters.transmission ? "var(--color-text)" : "var(--color-muted)",
                            fontSize: "0.95rem",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    >
                        <option value="">All</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                    </select>
                </div>

                {/* Condition */}
                <div>
                    <label
                        style={{
                            display: "block",
                            color: "var(--color-muted)",
                            fontSize: "0.75rem",
                            marginBottom: "6px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Condition
                    </label>
                    <select
                        value={filters.condition ?? ""}
                        onChange={(e) => updateFilter("condition", e.target.value || undefined)}
                        style={{
                            width: "100%",
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            color: filters.condition ? "var(--color-text)" : "var(--color-muted)",
                            fontSize: "0.95rem",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    >
                        <option value="">All</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                        <option value="demo">Demo</option>
                    </select>
                </div>

                {/* Reset */}
                {isFiltered && (
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <button
                            onClick={resetFilters}
                            style={{
                                background: "transparent",
                                border: "1px solid var(--color-border)",
                                borderRadius: "8px",
                                padding: "10px 20px",
                                color: "var(--color-muted)",
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Reset filters
                        </button>
                    </div>
                )}
            </div>

            {/* Results */}
            {filteredOccasions.length === 0 ? (
                <div
                    style={{
                        textAlign: "center",
                        padding: "96px 0",
                        color: "var(--color-muted)",
                    }}
                >
                    <p style={{ fontSize: "1.1rem", marginBottom: "16px" }}>No occasions match your filters.</p>
                    <button
                        onClick={resetFilters}
                        style={{
                            background: "var(--color-accent)",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 24px",
                            color: "#000",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Reset filters
                    </button>
                </div>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {filteredOccasions.map((occasion) => {
                        const slug = `${occasion.make}-${occasion.model}`.toLowerCase().replace(/\s+/g, "-");

                        return (
                            <div
                                key={occasion.id}
                                style={{
                                    background: "var(--color-panel)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    transition: "border-color 0.2s",
                                }}
                            >
                                {/* Image */}
                                <div
                                    style={{
                                        position: "relative",
                                        height: "220px",
                                        background: "var(--color-surface)",
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
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            No image available
                                        </div>
                                    )}
                                    {/* Condition badge */}
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "12px",
                                            left: "12px",
                                            background:
                                                occasion.condition === "new"
                                                    ? "#2d6a4f"
                                                    : occasion.condition === "demo"
                                                      ? "#2d4a7a"
                                                      : "var(--color-carbon)",
                                            color: "#fff",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            padding: "4px 10px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {occasion.condition}
                                    </span>
                                </div>

                                {/* Content */}
                                <div style={{ padding: "20px" }}>
                                    <div style={{ marginBottom: "16px" }}>
                                        <h2
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                fontSize: "1.3rem",
                                                fontWeight: 700,
                                                color: "var(--color-text)",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            {occasion.make} {occasion.model}
                                        </h2>
                                        <p
                                            style={{
                                                color: "var(--color-accent)",
                                                fontSize: "1.4rem",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {formattedPrice(occasion.askingPrice)}
                                        </p>
                                    </div>

                                    {/* Key stats */}
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "8px",
                                            marginBottom: "16px",
                                            padding: "12px",
                                            background: "var(--color-surface)",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        {[
                                            {
                                                label: "Year",
                                                value: occasion.year,
                                            },
                                            {
                                                label: "Mileage",
                                                value: formattedMileage(occasion.mileage),
                                            },
                                            {
                                                label: "Transmission",
                                                value: occasion.transmission.charAt(0).toUpperCase() + occasion.transmission.slice(1),
                                            },
                                            {
                                                label: "Color",
                                                value: occasion.colour ?? "—",
                                            },
                                        ].map((stat) => (
                                            <div key={stat.label}>
                                                <span
                                                    style={{
                                                        display: "block",
                                                        color: "var(--color-muted)",
                                                        fontSize: "0.7rem",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.05em",
                                                    }}
                                                >
                                                    {stat.label}
                                                </span>
                                                <span
                                                    style={{
                                                        color: "var(--color-text)",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {stat.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    {occasion.features.length > 0 && (
                                        <div style={{ marginBottom: "16px" }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "6px",
                                                }}
                                            >
                                                {occasion.features.slice(0, 4).map((feature) => (
                                                    <span
                                                        key={feature}
                                                        style={{
                                                            background: "var(--color-accent-dim)",
                                                            color: "var(--color-accent)",
                                                            fontSize: "0.75rem",
                                                            padding: "3px 10px",
                                                            borderRadius: "4px",
                                                        }}
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                                {occasion.features.length > 4 && (
                                                    <span
                                                        style={{
                                                            color: "var(--color-muted)",
                                                            fontSize: "0.75rem",
                                                            padding: "3px 6px",
                                                        }}
                                                    >
                                                        +{occasion.features.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Description */}
                                    {occasion.description && (
                                        <p
                                            style={{
                                                color: "var(--color-muted)",
                                                fontSize: "0.85rem",
                                                lineHeight: 1.5,
                                                marginBottom: "16px",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {occasion.description}
                                        </p>
                                    )}

                                    {/* CTA */}
                                    <Link
                                        href={`/occasions/${slug}-${occasion.id}`}
                                        style={{
                                            display: "block",
                                            textAlign: "center",
                                            background: "var(--color-accent)",
                                            color: "#000",
                                            fontWeight: 700,
                                            padding: "12px",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            fontSize: "0.9rem",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        VIEW DETAILS
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

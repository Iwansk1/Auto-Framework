"use client";

import Link from "next/link";
import { useVehicleComparison } from "@automotive/react";
import { VehicleCard } from "@automotive/react";
import { Vehicle } from "@automotive/core";
import Image from "next/image";

export default function HomePage() {
    const {
        vehicles,
        isSelected,
        canAddMore,
        toggleVehicle,
        selectedVehicles,
    } = useVehicleComparison();

    const fuelTypeColor: Record<string, string> = {
        electric: "#34d399",
        hybrid: "#60a5fa",
        petrol: "#f0a500",
        diesel: "#a78bfa",
    };

    return (
        <div
            style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "48px 24px",
            }}
        >
            {/* Hero header */}
            <div style={{ marginBottom: "48px" }}>
                <p
                    style={{
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                        fontWeight: 600,
                        marginBottom: "12px",
                    }}
                >
                    Vehicle Catalogue
                </p>
                <h1
                    style={{
                        fontSize: "clamp(36px, 5vw, 64px)",
                        lineHeight: 1,
                        color: "var(--color-text)",
                        margin: "0 0 16px 0",
                    }}
                >
                    Find Your
                    <br />
                    <span style={{ color: "var(--color-accent)" }}>
                        Perfect Drive
                    </span>
                </h1>
                <p
                    style={{
                        color: "var(--color-muted)",
                        fontSize: "15px",
                        fontWeight: 300,
                    }}
                >
                    Select up to 3 vehicles to compare side by side
                </p>
            </div>

            {/* Comparison bar */}
            {selectedVehicles.length > 0 && (
                <div
                    role="status"
                    aria-live="polite"
                    style={{
                        marginBottom: "32px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-accent-dim)",
                        border: "1px solid var(--color-accent)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <p
                        style={{
                            fontSize: "14px",
                            color: "var(--color-accent)",
                            fontWeight: 500,
                            margin: 0,
                        }}
                    >
                        {selectedVehicles.length} vehicle
                        {selectedVehicles.length > 1 ? "s" : ""} selected
                    </p>
                    <Link
                        href="/compare"
                        style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "var(--color-carbon)",
                            backgroundColor: "var(--color-accent)",
                            padding: "8px 20px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            transition: "opacity 0.2s",
                        }}
                    >
                        Compare Now →
                    </Link>
                </div>
            )}

            {/* Vehicle grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "24px",
                }}
                role="list"
                aria-label="Available vehicles"
            >
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} role="listitem">
                        <VehicleCard
                            vehicle={vehicle}
                            isSelected={isSelected(vehicle.id)}
                            canSelect={canAddMore}
                            onToggle={toggleVehicle}
                            className=""
                            renderImage={(v: Vehicle) =>
                                v.imageUrl ? (
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "180px",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: "16px",
                                            backgroundColor:
                                                "var(--color-surface)",
                                            position: "relative",
                                        }}
                                    >
                                        <Image
                                            src={v.imageUrl}
                                            alt={`${v.make} ${v.model} ${v.year}`}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                ) : null
                            }
                            renderBadge={(v: Vehicle) => (
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "8px",
                                        marginBottom: "16px",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: 600,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            padding: "4px 10px",
                                            borderRadius: "4px",
                                            backgroundColor: `${fuelTypeColor[v.fuelType]}18`,
                                            color: fuelTypeColor[v.fuelType],
                                            border: `1px solid ${fuelTypeColor[v.fuelType]}40`,
                                        }}
                                    >
                                        {v.fuelType}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: 600,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            padding: "4px 10px",
                                            borderRadius: "4px",
                                            backgroundColor:
                                                "var(--color-panel)",
                                            color: "var(--color-muted)",
                                            border: "1px solid var(--color-border)",
                                        }}
                                    >
                                        {v.category}
                                    </span>
                                </div>
                            )}
                            renderActions={(v: Vehicle) => (
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "8px",
                                        marginTop: "16px",
                                        paddingTop: "16px",
                                        borderTop:
                                            "1px solid var(--color-border)",
                                    }}
                                >
                                    <button
                                        onClick={() => toggleVehicle(v)}
                                        disabled={
                                            !canAddMore && !isSelected(v.id)
                                        }
                                        style={{
                                            flex: 1,
                                            padding: "10px",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            letterSpacing: "0.06em",
                                            textTransform: "uppercase",
                                            borderRadius: "8px",
                                            border: isSelected(v.id)
                                                ? "1px solid var(--color-accent)"
                                                : "1px solid var(--color-border)",
                                            backgroundColor: isSelected(v.id)
                                                ? "var(--color-accent-dim)"
                                                : "transparent",
                                            color: isSelected(v.id)
                                                ? "var(--color-accent)"
                                                : "var(--color-muted)",
                                            cursor:
                                                !canAddMore && !isSelected(v.id)
                                                    ? "not-allowed"
                                                    : "pointer",
                                            opacity:
                                                !canAddMore && !isSelected(v.id)
                                                    ? 0.4
                                                    : 1,

                                            transition: "all 0.2s",
                                        }}
                                        aria-pressed={isSelected(v.id)}
                                        aria-label={
                                            isSelected(v.id)
                                                ? `Remove ${v.make} ${v.model} from comparison`
                                                : `Add ${v.make} ${v.model} to comparison`
                                        }
                                    >
                                        {isSelected(v.id)
                                            ? "✓ Selected"
                                            : "+ Compare"}
                                    </button>
                                    <Link
                                        href={`/configure/${v.id}`}
                                        style={{
                                            flex: 1,
                                            padding: "10px",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            letterSpacing: "0.06em",
                                            textTransform: "uppercase",
                                            borderRadius: "8px",
                                            border: "1px solid var(--color-accent)",
                                            backgroundColor:
                                                "var(--color-accent)",
                                            color: "var(--color-carbon)",
                                            textDecoration: "none",
                                            textAlign: "center",
                                            transition: "opacity 0.2s",
                                        }}
                                    >
                                        Configure
                                    </Link>
                                </div>
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

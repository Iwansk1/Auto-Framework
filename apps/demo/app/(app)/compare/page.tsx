"use client";

import Link from "next/link";
import { useVehicleComparison } from "@automotive/react";
import { ComparisonTable } from "@automotive/react";
import {
    PerformanceScoringStrategy,
    EfficiencyScoringStrategy,
} from "@automotive/core";
import { useMemo } from "react";

export default function ComparePage() {
    const {
        comparisonResult,
        selectedVehicles,
        setStrategy,
        activeStrategy,
        toggleVehicle,
    } = useVehicleComparison();

    const availableStrategies = useMemo(
        () => [
            new PerformanceScoringStrategy(),
            new EfficiencyScoringStrategy(),
        ],
        [],
    );

    if (selectedVehicles.length === 0) {
        return (
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "96px 24px",
                    textAlign: "center",
                }}
            >
                <p style={{ fontSize: "64px", marginBottom: "24px" }}>🏎️</p>
                <h1
                    style={{
                        fontSize: "32px",
                        color: "var(--color-text)",
                        marginBottom: "12px",
                    }}
                >
                    No vehicles selected
                </h1>
                <p
                    style={{
                        color: "var(--color-muted)",
                        marginBottom: "32px",
                        fontSize: "15px",
                    }}
                >
                    Go back to the catalogue and select up to 3 vehicles to
                    compare
                </p>
                <Link
                    href="/"
                    style={{
                        display: "inline-block",
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-carbon)",
                        padding: "12px 28px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                    }}
                >
                    Browse Vehicles
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
            {/* Header */}
            <div style={{ marginBottom: "40px" }}>
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
                    Comparison
                </p>
                <h1
                    style={{
                        fontSize: "clamp(32px, 4vw, 52px)",
                        lineHeight: 1,
                        color: "var(--color-text)",
                        margin: "0 0 16px 0",
                    }}
                >
                    Head to Head
                </h1>
                <p style={{ color: "var(--color-muted)", fontSize: "15px" }}>
                    Comparing {selectedVehicles.length} vehicle
                    {selectedVehicles.length > 1 ? "s" : ""}
                </p>
            </div>

            {/* Strategy switcher */}
            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "32px",
                }}
                role="group"
                aria-label="Scoring strategy"
            >
                {availableStrategies.map((strategy) => {
                    const isActive = strategy.name === activeStrategy.name;
                    return (
                        <button
                            key={strategy.name}
                            onClick={() => setStrategy(strategy)}
                            aria-pressed={isActive}
                            style={{
                                padding: "10px 24px",
                                fontSize: "12px",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                borderRadius: "8px",
                                border: isActive
                                    ? "1px solid var(--color-accent)"
                                    : "1px solid var(--color-border)",
                                backgroundColor: isActive
                                    ? "var(--color-accent)"
                                    : "transparent",
                                color: isActive
                                    ? "var(--color-carbon)"
                                    : "var(--color-muted)",
                                cursor: "pointer",
                                transition: "all 0.2s",
                            }}
                        >
                            {strategy.name}
                        </button>
                    );
                })}
            </div>

            {/* Comparison table */}
            {comparisonResult && (
                <div
                    style={{
                        backgroundColor: "var(--color-panel)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    {/* Table header */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "40px 1fr 80px 80px 80px 100px 80px 100px",
                            gap: "16px",
                            padding: "12px 24px",
                            backgroundColor: "var(--color-surface)",
                            borderBottom: "1px solid var(--color-border)",
                        }}
                    >
                        {[
                            "#",
                            "Vehicle",
                            "Score",
                            "Power",
                            "0–100",
                            "Consumption",
                            "Range",
                            "Price",
                        ].map((col) => (
                            <span
                                key={col}
                                style={{
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "var(--color-muted)",
                                }}
                            >
                                {col}
                            </span>
                        ))}
                    </div>

                    {/* Table rows */}
                    {comparisonResult.scoredVehicles.map(
                        ({ vehicle, score, rank }, index) => (
                            <div
                                key={vehicle.id}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "40px 1fr 80px 80px 80px 100px 80px 100px",
                                    gap: "16px",
                                    padding: "20px 24px",
                                    alignItems: "center",
                                    borderBottom:
                                        index <
                                        comparisonResult.scoredVehicles.length -
                                            1
                                            ? "1px solid var(--color-border)"
                                            : "none",
                                    backgroundColor:
                                        rank === 1
                                            ? "var(--color-accent-dim)"
                                            : "transparent",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        color:
                                            rank === 1
                                                ? "var(--color-accent)"
                                                : "var(--color-muted)",
                                    }}
                                >
                                    #{rank}
                                </span>

                                <div>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            color: "var(--color-text)",
                                            margin: "0 0 2px 0",
                                        }}
                                    >
                                        {vehicle.make} {vehicle.model}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "12px",
                                            color: "var(--color-muted)",
                                            margin: 0,
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {vehicle.year} · {vehicle.fuelType}
                                    </p>
                                </div>

                                <span
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        fontFamily: "var(--font-display)",
                                        color: "var(--color-accent)",
                                    }}
                                >
                                    {score.toFixed(1)}
                                </span>

                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "var(--color-text)",
                                    }}
                                >
                                    {vehicle.specs.horsepower} hp
                                </span>

                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "var(--color-text)",
                                    }}
                                >
                                    {vehicle.specs.acceleration}s
                                </span>

                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "var(--color-text)",
                                    }}
                                >
                                    {vehicle.specs.fuelEfficiency} L/100km
                                </span>

                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "var(--color-text)",
                                    }}
                                >
                                    {vehicle.specs.range} km
                                </span>

                                <span
                                    style={{
                                        fontSize: "14px",
                                        color: "var(--color-text)",
                                    }}
                                >
                                    {new Intl.NumberFormat("nl-NL", {
                                        style: "currency",
                                        currency: "EUR",
                                        maximumFractionDigits: 0,
                                    }).format(vehicle.price)}
                                </span>
                            </div>
                        ),
                    )}
                </div>
            )}

            {/* Remove vehicles */}
            <div
                style={{
                    marginTop: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                }}
            >
                {selectedVehicles.map((vehicle) => (
                    <button
                        key={vehicle.id}
                        onClick={() => toggleVehicle(vehicle)}
                        style={{
                            fontSize: "12px",
                            color: "var(--color-muted)",
                            border: "1px solid var(--color-border)",
                            backgroundColor: "transparent",
                            padding: "6px 14px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.2s",
                        }}
                        aria-label={`Remove ${vehicle.make} ${vehicle.model} from comparison`}
                    >
                        Remove {vehicle.make} {vehicle.model} ✕
                    </button>
                ))}
            </div>

            <div style={{ marginTop: "16px" }}>
                <Link
                    href="/"
                    style={{
                        fontSize: "13px",
                        color: "var(--color-muted)",
                        textDecoration: "none",
                    }}
                >
                    ← Back to catalogue
                </Link>
            </div>
        </div>
    );
}

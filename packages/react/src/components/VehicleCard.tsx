import React from "react";
import { Vehicle } from "@automotive/core";

interface VehicleCardProps {
    vehicle: Vehicle;
    isSelected?: boolean;
    onToggle?: (vehicle: Vehicle) => void;
    canSelect?: boolean;
    className?: string;
    selectedClassName?: string;
    renderImage?: (vehicle: Vehicle) => React.ReactNode;
    renderBadge?: (vehicle: Vehicle) => React.ReactNode;
    renderActions?: (vehicle: Vehicle) => React.ReactNode;
}

export function VehicleCard({
    vehicle,
    isSelected = false,
    onToggle,
    canSelect = true,
    className = "",
    selectedClassName = "border-blue-500",
    renderImage,
    renderBadge,
    renderActions,
}: VehicleCardProps) {
    const handleToggle = () => {
        if (onToggle && (canSelect || isSelected)) {
            onToggle(vehicle);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <article
            aria-label={`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
            aria-selected={isSelected}
            className={className}
            style={{
                backgroundColor: "var(--color-panel)",
                border: isSelected
                    ? "1px solid var(--color-accent)"
                    : "1px solid var(--color-border)",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: isSelected
                    ? "0 0 0 1px var(--color-accent), 0 8px 32px rgba(240,165,0,0.08)"
                    : "0 4px 24px rgba(0,0,0,0.3)",
            }}
        >
            {renderImage?.(vehicle)}
            {renderBadge?.(vehicle)}

            <header style={{ marginBottom: "16px" }}>
                <h2
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "24px",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: "var(--color-text)",
                        margin: "0 0 4px 0",
                    }}
                >
                    {vehicle.make} {vehicle.model}
                </h2>
                <p
                    style={{
                        fontSize: "13px",
                        color: "var(--color-muted)",
                        margin: 0,
                    }}
                >
                    {vehicle.year}
                </p>
            </header>

            <dl
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "16px",
                }}
            >
                {[
                    {
                        label: "Price",
                        value: new Intl.NumberFormat("nl-NL", {
                            style: "currency",
                            currency: "EUR",
                            maximumFractionDigits: 0,
                        }).format(vehicle.price),
                    },
                    { label: "Power", value: `${vehicle.specs.horsepower} hp` },
                    {
                        label: "0–100 km/h",
                        value: `${vehicle.specs.acceleration}s`,
                    },
                    {
                        label: "Consumption",
                        value: `${vehicle.specs.fuelEfficiency} L/100km`,
                    },
                ].map(({ label, value }) => (
                    <div
                        key={label}
                        style={{
                            backgroundColor: "var(--color-surface)",
                            borderRadius: "8px",
                            padding: "10px 12px",
                        }}
                    >
                        <dt
                            style={{
                                fontSize: "10px",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "var(--color-muted)",
                                marginBottom: "4px",
                            }}
                        >
                            {label}
                        </dt>
                        <dd
                            style={{
                                fontSize: "15px",
                                fontWeight: 500,
                                color: "var(--color-text)",
                                margin: 0,
                            }}
                        >
                            {value}
                        </dd>
                    </div>
                ))}
            </dl>

            {renderActions?.(vehicle)}
        </article>
    );
}

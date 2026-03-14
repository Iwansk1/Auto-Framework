"use client";
import Link from "next/link";
import { useVehicleComparison, useVehicleFilter } from "@automotive/react";
import { VehicleCard } from "@automotive/react";
import Image from "next/image";

export default function HomePage() {
    const { isSelected, canAddMore, toggleVehicle, selectedVehicles } =
        useVehicleComparison();

    const {
        filteredVehicles,
        filters,
        updateFilter,
        resetFilters,
        isFiltered,
        availableCategories,
        availableFuelTypes,
        totalCount,
        filteredCount,
    } = useVehicleFilter();

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
                    Vehicle Catalogue
                </h1>
                <p style={{ color: "var(--color-muted)" }}>
                    {isFiltered
                        ? `${filteredCount} of ${totalCount} vehicles match your filters`
                        : `${totalCount} vehicles available`}
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
                        onChange={(e) =>
                            updateFilter("search", e.target.value || undefined)
                        }
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

                {/* Category */}
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
                        Category
                    </label>
                    <select
                        value={filters.category ?? ""}
                        onChange={(e) =>
                            updateFilter(
                                "category",
                                e.target.value || undefined,
                            )
                        }
                        style={{
                            width: "100%",
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            color: filters.category
                                ? "var(--color-text)"
                                : "var(--color-muted)",
                            fontSize: "0.95rem",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    >
                        <option value="">All categories</option>
                        {availableCategories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Fuel Type */}
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
                        Fuel Type
                    </label>
                    <select
                        value={filters.fuelType ?? ""}
                        onChange={(e) =>
                            updateFilter(
                                "fuelType",
                                e.target.value || undefined,
                            )
                        }
                        style={{
                            width: "100%",
                            background: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            color: filters.fuelType
                                ? "var(--color-text)"
                                : "var(--color-muted)",
                            fontSize: "0.95rem",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    >
                        <option value="">All fuel types</option>
                        {availableFuelTypes.map((fuel) => (
                            <option key={fuel} value={fuel}>
                                {fuel.charAt(0).toUpperCase() + fuel.slice(1)}
                            </option>
                        ))}
                    </select>
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
                        placeholder="e.g. 80000"
                        value={filters.maxPrice ?? ""}
                        onChange={(e) =>
                            updateFilter(
                                "maxPrice",
                                e.target.value
                                    ? Number(e.target.value)
                                    : undefined,
                            )
                        }
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

            {/* Empty state */}
            {filteredVehicles.length === 0 ? (
                <div
                    style={{
                        textAlign: "center",
                        padding: "96px 0",
                        color: "var(--color-muted)",
                    }}
                >
                    <p style={{ fontSize: "1.1rem", marginBottom: "16px" }}>
                        No vehicles match your filters.
                    </p>
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
                <>
                    {/* Vehicle grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "24px",
                            marginBottom:
                                selectedVehicles.length > 0 ? "120px" : "0",
                        }}
                    >
                        {filteredVehicles.map((v) => (
                            <VehicleCard
                                key={v.id}
                                vehicle={v}
                                renderImage={(vehicle) =>
                                    vehicle.imageUrl ? (
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
                                renderBadge={(vehicle) => (
                                    <span
                                        style={{
                                            background:
                                                fuelTypeColor[
                                                    vehicle.fuelType
                                                ] ?? "#888",
                                            color: "#000",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            padding: "4px 10px",
                                            borderRadius: "4px",
                                            width: "fit-content",
                                        }}
                                    >
                                        {vehicle.fuelType}
                                    </span>
                                )}
                                renderActions={(vehicle) => (
                                    <div
                                        style={{ display: "flex", gap: "8px" }}
                                    >
                                        <button
                                            onClick={() =>
                                                toggleVehicle(vehicle)
                                            }
                                            disabled={
                                                !isSelected(vehicle.id) &&
                                                !canAddMore
                                            }
                                            aria-pressed={isSelected(
                                                vehicle.id,
                                            )}
                                            style={{
                                                flex: 1,
                                                padding: "10px",
                                                background: isSelected(
                                                    vehicle.id,
                                                )
                                                    ? "var(--color-accent)"
                                                    : "transparent",
                                                border: "1px solid var(--color-border)",
                                                borderRadius: "8px",
                                                color: isSelected(vehicle.id)
                                                    ? "#000"
                                                    : "var(--color-muted)",
                                                fontWeight: 600,
                                                fontSize: "0.85rem",
                                                cursor:
                                                    !isSelected(vehicle.id) &&
                                                    !canAddMore
                                                        ? "not-allowed"
                                                        : "pointer",
                                                opacity:
                                                    !isSelected(vehicle.id) &&
                                                    !canAddMore
                                                        ? 0.4
                                                        : 1,
                                            }}
                                        >
                                            {isSelected(vehicle.id)
                                                ? "Remove"
                                                : "Compare"}
                                        </button>
                                        <Link
                                            href={`/configure/${vehicle.id}`}
                                            style={{
                                                flex: 1,
                                                padding: "10px",
                                                background:
                                                    "var(--color-accent)",
                                                border: "none",
                                                borderRadius: "8px",
                                                color: "#000",
                                                fontWeight: 700,
                                                fontSize: "0.85rem",
                                                textAlign: "center",
                                                textDecoration: "none",
                                            }}
                                        >
                                            Configure
                                        </Link>
                                    </div>
                                )}
                            />
                        ))}
                    </div>

                    {/* Comparison bar */}
                    {selectedVehicles.length > 0 && (
                        <div
                            style={{
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: "var(--color-panel)",
                                borderTop: "1px solid var(--color-border)",
                                padding: "16px 24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                zIndex: 50,
                            }}
                        >
                            <span
                                style={{
                                    color: "var(--color-muted)",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {selectedVehicles.length} vehicle
                                {selectedVehicles.length > 1 ? "s" : ""}{" "}
                                selected for comparison
                            </span>
                            <Link
                                href="/compare"
                                style={{
                                    background: "var(--color-accent)",
                                    color: "#000",
                                    fontWeight: 700,
                                    padding: "10px 24px",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Compare Now
                            </Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

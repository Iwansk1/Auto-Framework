"use client";

import { useVehicleFilter, useVehicleComparison } from "@automotive/react";

export default function HomePage() {
    const { toggleVehicle, isSelected, canAddMore, selectedVehicles } =
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
                fontFamily: "system-ui, sans-serif",
            }}
        >
            {/* Header */}
            <div style={{ marginBottom: "40px" }}>
                <h1
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "8px",
                    }}
                >
                    Vehicle Catalogue
                </h1>
                <p style={{ color: "#666", marginBottom: "4px" }}>
                    {isFiltered
                        ? `${filteredCount} of ${totalCount} vehicles match your filters`
                        : `${totalCount} vehicles available`}
                </p>
                <p style={{ color: "#999", fontSize: "0.85rem" }}>
                    Powered by @automotive/adapter-rest — fetching from Payload
                    REST API
                </p>
            </div>

            {/* Filters */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "12px",
                    marginBottom: "32px",
                    padding: "20px",
                    background: "#f9f9f9",
                    borderRadius: "10px",
                    border: "1px solid #eee",
                }}
            >
                <input
                    type="text"
                    placeholder="Search make, model..."
                    value={filters.search ?? ""}
                    onChange={(e) =>
                        updateFilter("search", e.target.value || undefined)
                    }
                    style={{
                        padding: "8px 12px",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "0.9rem",
                    }}
                />
                <select
                    value={filters.category ?? ""}
                    onChange={(e) =>
                        updateFilter("category", e.target.value || undefined)
                    }
                    style={{
                        padding: "8px 12px",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "0.9rem",
                    }}
                >
                    <option value="">All categories</option>
                    {availableCategories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
                <select
                    value={filters.fuelType ?? ""}
                    onChange={(e) =>
                        updateFilter("fuelType", e.target.value || undefined)
                    }
                    style={{
                        padding: "8px 12px",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "0.9rem",
                    }}
                >
                    <option value="">All fuel types</option>
                    {availableFuelTypes.map((fuel) => (
                        <option key={fuel} value={fuel}>
                            {fuel.charAt(0).toUpperCase() + fuel.slice(1)}
                        </option>
                    ))}
                </select>
                {isFiltered && (
                    <button
                        onClick={resetFilters}
                        style={{
                            padding: "8px 12px",
                            borderRadius: "6px",
                            border: "1px solid #ddd",
                            background: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        Reset filters
                    </button>
                )}
            </div>

            {/* Vehicle Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "24px",
                }}
            >
                {filteredVehicles.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        style={{
                            border: isSelected(vehicle.id)
                                ? "2px solid #f0a500"
                                : "1px solid #eee",
                            borderRadius: "12px",
                            overflow: "hidden",
                            background: "#fff",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                height: "200px",
                                background: "#f5f5f5",
                            }}
                        >
                            {vehicle.imageUrl && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={vehicle.imageUrl}
                                    alt={`${vehicle.make} ${vehicle.model}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                            <span
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    background:
                                        fuelTypeColor[vehicle.fuelType] ??
                                        "#888",
                                    color: "#000",
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    padding: "3px 8px",
                                    borderRadius: "4px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {vehicle.fuelType}
                            </span>
                        </div>

                        <div style={{ padding: "16px" }}>
                            <h2
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    marginBottom: "4px",
                                }}
                            >
                                {vehicle.make} {vehicle.model}
                            </h2>
                            <p
                                style={{
                                    color: "#f0a500",
                                    fontWeight: 700,
                                    fontSize: "1.2rem",
                                    marginBottom: "12px",
                                }}
                            >
                                {new Intl.NumberFormat("nl-NL", {
                                    style: "currency",
                                    currency: "EUR",
                                    maximumFractionDigits: 0,
                                }).format(vehicle.price)}
                            </p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "8px",
                                    marginBottom: "16px",
                                    fontSize: "0.85rem",
                                }}
                            >
                                <div>
                                    <span style={{ color: "#999" }}>Power</span>
                                    <br />
                                    {vehicle.specs.horsepower} hp
                                </div>
                                <div>
                                    <span style={{ color: "#999" }}>0-100</span>
                                    <br />
                                    {vehicle.specs.acceleration}s
                                </div>
                                <div>
                                    <span style={{ color: "#999" }}>
                                        Top Speed
                                    </span>
                                    <br />
                                    {vehicle.specs.topSpeed} km/h
                                </div>
                                <div>
                                    <span style={{ color: "#999" }}>Range</span>
                                    <br />
                                    {vehicle.specs.range} km
                                </div>
                            </div>

                            <button
                                onClick={() => toggleVehicle(vehicle)}
                                disabled={
                                    !isSelected(vehicle.id) && !canAddMore
                                }
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    background: isSelected(vehicle.id)
                                        ? "#f0a500"
                                        : "#fff",
                                    border: "1px solid #f0a500",
                                    borderRadius: "8px",
                                    color: isSelected(vehicle.id)
                                        ? "#000"
                                        : "#f0a500",
                                    fontWeight: 600,
                                    cursor:
                                        !isSelected(vehicle.id) && !canAddMore
                                            ? "not-allowed"
                                            : "pointer",
                                    opacity:
                                        !isSelected(vehicle.id) && !canAddMore
                                            ? 0.5
                                            : 1,
                                }}
                            >
                                {isSelected(vehicle.id)
                                    ? "Remove from comparison"
                                    : "Add to comparison"}
                            </button>
                        </div>
                    </div>
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
                        background: "#fff",
                        borderTop: "1px solid #eee",
                        padding: "16px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        boxShadow: "0 -4px 12px rgba(0,0,0,0.08)",
                    }}
                >
                    <span style={{ color: "#666" }}>
                        {selectedVehicles.length} vehicle
                        {selectedVehicles.length > 1 ? "s" : ""} selected
                    </span>
                    <button
                        style={{
                            background: "#f0a500",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 24px",
                            fontWeight: 700,
                            cursor: "pointer",
                        }}
                    >
                        Compare Now
                    </button>
                </div>
            )}
        </div>
    );
}

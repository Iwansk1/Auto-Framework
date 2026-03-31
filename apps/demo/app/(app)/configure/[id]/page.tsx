"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import { useConfigurator } from "@automotive/react";
import { useVehicleComparison } from "@automotive/react";
interface ConfigurePageProps {
    params: Promise<{ id: string }>;
}

export default function ConfigurePage({ params }: ConfigurePageProps) {
    const { vehicles } = useVehicleComparison();
    const { id } = use(params);
    const vehicle = vehicles.find((v) => v.id === id);

    const {
        configuration,
        configuratorOptions,
        startConfiguration,
        selectColour,
        selectWheels,
        togglePackage,
        isColourSelected,
        isWheelsSelected,
        isPackageSelected,
        formattedPrice,
    } = useConfigurator();

    useEffect(() => {
        if (vehicle && (!configuration || configuration.vehicle.id !== vehicle.id)) {
            startConfiguration(vehicle);
        }
    }, [vehicle]);

    if (!vehicle) {
        return (
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "96px 24px",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "var(--color-text)", marginBottom: "16px" }}>Vehicle not found</h1>
                <Link href="/" style={{ color: "var(--color-accent)" }}>
                    Back to catalogue
                </Link>
            </div>
        );
    }

    if (!configuration) {
        return (
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "96px 24px",
                    textAlign: "center",
                }}
            >
                <p style={{ color: "var(--color-muted)" }}>Loading configurator...</p>
            </div>
        );
    }
    const { colours, wheels, packages } = configuratorOptions;
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
                <Link
                    href="/"
                    style={{
                        fontSize: "13px",
                        color: "var(--color-muted)",
                        textDecoration: "none",
                        display: "inline-block",
                        marginBottom: "16px",
                    }}
                >
                    ← Back to catalogue
                </Link>
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
                    Configurator
                </p>
                <h1
                    style={{
                        fontSize: "clamp(32px, 4vw, 52px)",
                        lineHeight: 1,
                        color: "var(--color-text)",
                        margin: 0,
                    }}
                >
                    {vehicle.make} {vehicle.model}
                </h1>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 340px",
                    gap: "32px",
                    alignItems: "start",
                }}
            >
                {/* Left — options */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                    }}
                >
                    {/* color */}
                    <section
                        style={{
                            backgroundColor: "var(--color-panel)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "16px",
                            padding: "28px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "18px",
                                color: "var(--color-text)",
                                marginBottom: "20px",
                                marginTop: 0,
                            }}
                        >
                            color
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                                flexWrap: "wrap",
                            }}
                        >
                            {colours.map((colour) => {
                                const selected = isColourSelected(colour.id);
                                return (
                                    <button
                                        key={colour.id}
                                        onClick={() => selectColour(colour.id)}
                                        role="radio"
                                        aria-checked={selected}
                                        aria-label={`${colour.name}${colour.priceModifier > 0 ? ` +€${colour.priceModifier}` : " included"}`}
                                        title={colour.name}
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            backgroundColor: colour.hex,
                                            border: selected ? "3px solid var(--color-accent)" : "3px solid transparent",
                                            outline: selected ? "2px solid var(--color-accent)" : "2px solid var(--color-border)",
                                            outlineOffset: "2px",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                        }}
                                    />
                                );
                            })}
                        </div>
                        {configuration.selectedColour && (
                            <p
                                style={{
                                    marginTop: "12px",
                                    fontSize: "13px",
                                    color: "var(--color-muted)",
                                }}
                            >
                                Selected: <span style={{ color: "var(--color-text)" }}>{configuration.selectedColour.name}</span>
                                {configuration.selectedColour.priceModifier > 0 && (
                                    <span
                                        style={{
                                            color: "var(--color-accent)",
                                            marginLeft: "8px",
                                        }}
                                    >
                                        +€
                                        {configuration.selectedColour.priceModifier.toLocaleString("nl-NL")}
                                    </span>
                                )}
                            </p>
                        )}
                    </section>

                    {/* Wheels */}
                    <section
                        style={{
                            backgroundColor: "var(--color-panel)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "16px",
                            padding: "28px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "18px",
                                color: "var(--color-text)",
                                marginBottom: "20px",
                                marginTop: 0,
                            }}
                        >
                            Wheels
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            {wheels.map((wheel) => {
                                const selected = isWheelsSelected(wheel.id);
                                return (
                                    <button
                                        key={wheel.id}
                                        onClick={() => selectWheels(wheel.id)}
                                        role="radio"
                                        aria-checked={selected}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "14px 18px",
                                            borderRadius: "10px",
                                            border: selected ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                                            backgroundColor: selected ? "var(--color-accent-dim)" : "var(--color-surface)",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            textAlign: "left",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: selected ? "var(--color-accent)" : "var(--color-text)",
                                            }}
                                        >
                                            {wheel.name}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "13px",
                                                color: wheel.priceModifier > 0 ? "var(--color-accent)" : "var(--color-muted)",
                                            }}
                                        >
                                            {wheel.priceModifier > 0 ? `+€${wheel.priceModifier.toLocaleString("nl-NL")}` : "Included"}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Packages */}
                    <section
                        style={{
                            backgroundColor: "var(--color-panel)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "16px",
                            padding: "28px",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "18px",
                                color: "var(--color-text)",
                                marginBottom: "20px",
                                marginTop: 0,
                            }}
                        >
                            Packages
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            {packages.map((pkg) => {
                                const selected = isPackageSelected(pkg.id);
                                return (
                                    <button
                                        key={pkg.id}
                                        onClick={() => togglePackage(pkg.id)}
                                        role="checkbox"
                                        aria-checked={selected}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "14px",
                                            padding: "16px 18px",
                                            borderRadius: "10px",
                                            border: selected ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                                            backgroundColor: selected ? "var(--color-accent-dim)" : "var(--color-surface)",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                            textAlign: "left",
                                        }}
                                    >
                                        {/* Checkbox indicator */}
                                        <span
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "4px",
                                                border: selected ? "2px solid var(--color-accent)" : "2px solid var(--color-border)",
                                                backgroundColor: selected ? "var(--color-accent)" : "transparent",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                marginTop: "2px",
                                                transition: "all 0.2s",
                                                color: "var(--color-carbon)",
                                                fontSize: "12px",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {selected ? "✓" : ""}
                                        </span>

                                        <div style={{ flex: 1 }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        color: selected ? "var(--color-accent)" : "var(--color-text)",
                                                    }}
                                                >
                                                    {pkg.name}
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize: "13px",
                                                        color: "var(--color-accent)",
                                                    }}
                                                >
                                                    +€
                                                    {pkg.priceModifier.toLocaleString("nl-NL")}
                                                </span>
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: "12px",
                                                    color: "var(--color-muted)",
                                                    margin: "0 0 8px 0",
                                                }}
                                            >
                                                {pkg.description}
                                            </p>
                                            <ul
                                                style={{
                                                    margin: 0,
                                                    padding: 0,
                                                    listStyle: "none",
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "6px",
                                                }}
                                            >
                                                {pkg.features.map((feature) => (
                                                    <li
                                                        key={feature}
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "var(--color-muted)",
                                                            backgroundColor: "var(--color-panel)",
                                                            border: "1px solid var(--color-border)",
                                                            padding: "2px 8px",
                                                            borderRadius: "4px",
                                                        }}
                                                    >
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Right — summary sidebar */}
                <aside
                    aria-label="Configuration summary"
                    style={{
                        backgroundColor: "var(--color-panel)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "16px",
                        padding: "28px",
                        position: "sticky",
                        top: "88px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "16px",
                            color: "var(--color-text)",
                            marginBottom: "24px",
                            marginTop: 0,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                        }}
                    >
                        Summary
                    </h2>

                    <dl
                        style={{
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <dt
                                style={{
                                    fontSize: "13px",
                                    color: "var(--color-muted)",
                                }}
                            >
                                Base price
                            </dt>
                            <dd
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    color: "var(--color-text)",
                                    margin: 0,
                                }}
                            >
                                {new Intl.NumberFormat("nl-NL", {
                                    style: "currency",
                                    currency: "EUR",
                                    maximumFractionDigits: 0,
                                }).format(vehicle.price)}
                            </dd>
                        </div>

                        {configuration.selectedColour && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <dt
                                    style={{
                                        fontSize: "13px",
                                        color: "var(--color-muted)",
                                    }}
                                >
                                    color
                                </dt>
                                <dd
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: "var(--color-text)",
                                        margin: 0,
                                    }}
                                >
                                    {configuration.selectedColour.name}
                                    {configuration.selectedColour.priceModifier > 0 && (
                                        <span
                                            style={{
                                                color: "var(--color-accent)",
                                                marginLeft: "6px",
                                            }}
                                        >
                                            +€
                                            {configuration.selectedColour.priceModifier.toLocaleString("nl-NL")}
                                        </span>
                                    )}
                                </dd>
                            </div>
                        )}

                        {configuration.selectedWheels && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <dt
                                    style={{
                                        fontSize: "13px",
                                        color: "var(--color-muted)",
                                    }}
                                >
                                    Wheels
                                </dt>
                                <dd
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: "var(--color-text)",
                                        margin: 0,
                                    }}
                                >
                                    {configuration.selectedWheels.name}
                                    {configuration.selectedWheels.priceModifier > 0 && (
                                        <span
                                            style={{
                                                color: "var(--color-accent)",
                                                marginLeft: "6px",
                                            }}
                                        >
                                            +€
                                            {configuration.selectedWheels.priceModifier.toLocaleString("nl-NL")}
                                        </span>
                                    )}
                                </dd>
                            </div>
                        )}

                        {configuration.selectedPackages.length > 0 && (
                            <div>
                                <dt
                                    style={{
                                        fontSize: "13px",
                                        color: "var(--color-muted)",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Packages
                                </dt>
                                {configuration.selectedPackages.map((pkg) => (
                                    <dd
                                        key={pkg.id}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: "13px",
                                            fontWeight: 500,
                                            color: "var(--color-text)",
                                            margin: "0 0 4px 0",
                                        }}
                                    >
                                        <span>{pkg.name}</span>
                                        <span
                                            style={{
                                                color: "var(--color-accent)",
                                            }}
                                        >
                                            +€
                                            {pkg.priceModifier.toLocaleString("nl-NL")}
                                        </span>
                                    </dd>
                                ))}
                            </div>
                        )}

                        {/* Divider */}
                        <div
                            style={{
                                borderTop: "1px solid var(--color-border)",
                                paddingTop: "14px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <dt
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: "var(--color-text)",
                                }}
                            >
                                Total
                            </dt>
                            <dd
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    color: "var(--color-accent)",
                                    margin: 0,
                                }}
                                aria-live="polite"
                                aria-label={`Total price ${formattedPrice}`}
                            >
                                {formattedPrice}
                            </dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </div>
    );
}

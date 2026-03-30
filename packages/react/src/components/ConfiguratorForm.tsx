import React from "react";
import { VehicleConfiguration, ConfiguratorOptions } from "@automotive/core";

interface ConfiguratorFormProps {
    configuration: VehicleConfiguration;
    options: ConfiguratorOptions;
    onSelectColour: (colourId: string) => void;
    onSelectWheels: (wheelId: string) => void;
    onTogglePackage: (packageId: string) => void;
    isColourSelected: (colourId: string) => boolean;
    isWheelsSelected: (wheelId: string) => boolean;
    isPackageSelected: (packageId: string) => boolean;
    formattedPrice: string | null;
    className?: string;
    fieldsetClassName?: string;
    legendClassName?: string;
    optionClassName?: string;
    selectedOptionClassName?: string;
}

export function ConfiguratorForm({
    configuration,
    options,
    onSelectColour,
    onSelectWheels,
    onTogglePackage,
    isColourSelected,
    isWheelsSelected,
    isPackageSelected,
    formattedPrice,
    className = "",
    fieldsetClassName = "",
    legendClassName = "",
    optionClassName = "",
    selectedOptionClassName = "",
}: ConfiguratorFormProps) {
    return (
        <section aria-label="Vehicle configurator form" className={className}>
            <header>
                <h2>
                    {configuration.vehicle.make} {configuration.vehicle.model}
                </h2>
                <p aria-label="Total price" aria-live="polite">
                    {formattedPrice}
                </p>
            </header>

            {/* Color options */}
            <fieldset className={fieldsetClassName}>
                <legend className={legendClassName}>Colors</legend>
                <div role="radiogroup" aria-label="Select a color">
                    {" "}
                    {options.colours.map((colour) => (
                        <button
                            key={colour.id}
                            role="radio"
                            aria-checked={isColourSelected(colour.id)}
                            aria-label={`${colour.name}${colour.priceModifier > 0 ? ` +€${colour.priceModifier}` : "included"}`}
                            onClick={() => onSelectColour(colour.id)}
                            style={{ backgroundColor: colour.hex }}
                            title={colour.name}
                            className={`${optionClassName} ${isColourSelected(colour.id) ? selectedOptionClassName : ""}`}
                        ></button>
                    ))}
                </div>
            </fieldset>

            {/* Wheels selection */}
            <fieldset>
                <legend>Wheels</legend>
                <div role="radiogroup" aria-label="Select wheels">
                    {options.wheels.map((wheel) => (
                        <button
                            key={wheel.id}
                            role="radio"
                            aria-checked={isWheelsSelected(wheel.id)}
                            aria-label={`${wheel.name}${wheel.priceModifier > 0 ? ` +€${wheel.priceModifier}` : " included"}`}
                            onClick={() => onSelectWheels(wheel.id)}
                        >
                            {wheel.name}
                            {wheel.priceModifier > 0 && (
                                <small>
                                    +€
                                    {wheel.priceModifier.toLocaleString("nl-NL")}
                                </small>
                            )}
                        </button>
                    ))}
                </div>
            </fieldset>

            {/* Packages selection */}
            <fieldset>
                <legend>Packages</legend>
                <div>
                    {options.packages.map((pkg) => (
                        <button
                            key={pkg.id}
                            role="checkbox"
                            aria-checked={isPackageSelected(pkg.id)}
                            aria-label={`${pkg.name}: ${pkg.description}`}
                            onClick={() => onTogglePackage(pkg.id)}
                        >
                            <strong>{pkg.name}</strong>
                            <p>{pkg.description}</p>
                            <ul aria-label="Included features">
                                {pkg.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <span>+€{pkg.priceModifier.toLocaleString("nl-NL")}</span>
                        </button>
                    ))}
                </div>
            </fieldset>
        </section>
    );
}

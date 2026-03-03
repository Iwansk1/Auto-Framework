import React from "react";
import { VehicleConfiguration, ConfiguratorOptions } from "@automotive/core";

interface ConfiguratorFormProps {
    configuration: VehicleConfiguration;
    options: ConfiguratorOptions;
    onSelectColor: (colorId: string) => void;
    onSelectWheels: (wheelId: string) => void;
    onTogglePackage: (packageId: string) => void;
    isColorSelected: (colorId: string) => boolean;
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
    onSelectColor,
    onSelectWheels,
    onTogglePackage,
    isColorSelected,
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
                    {options.colors.map((color) => (
                        <button
                            key={color.id}
                            role="radio"
                            aria-checked={isColorSelected(color.id)}
                            aria-label={`${color.name}${color.priceModifier > 0 ? ` +€${color.priceModifier}` : "included"}`}
                            onClick={() => onSelectColor(color.id)}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                            className={`${optionClassName} ${isColorSelected(color.id) ? selectedOptionClassName : ""}`}
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
                            aria-label={`${wheel.name}${
                                wheel.priceModifier > 0
                                    ? ` +€${wheel.priceModifier}`
                                    : " included"
                            }`}
                            onClick={() => onSelectWheels(wheel.id)}
                        >
                            {wheel.name}
                            {wheel.priceModifier > 0 && (
                                <small>
                                    +€
                                    {wheel.priceModifier.toLocaleString(
                                        "nl-NL",
                                    )}
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
                            <span>
                                +€{pkg.priceModifier.toLocaleString("nl-NL")}
                            </span>
                        </button>
                    ))}
                </div>
            </fieldset>
        </section>
    );
}

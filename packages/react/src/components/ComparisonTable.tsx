import React from "react";
import { ComparisonResult, ScoringStrategy } from "@automotive/core";

interface ComparisonTableProps {
    result: ComparisonResult;
    availableStrategies: ScoringStrategy[];
    onStrategyChange: (strategy: ScoringStrategy) => void;
    className?: string;
    headerClassName?: string;
    rowClassName?: string;
    scoreClassName?: string;
}

export function ComparisonTable({
    result,
    availableStrategies,
    onStrategyChange,
    className = "",
    headerClassName = "",
    rowClassName = "",
    scoreClassName = "",
}: ComparisonTableProps) {
    const { scoredVehicles, strategyName, strategyDescription } = result;

    return (
        <section aria-label="Vehicle comparison">
            <div role="group" aria-label="Scoring strategy">
                <p>{strategyDescription}</p>
                <div>
                    {availableStrategies.map((strategy) => (
                        <button
                            key={strategy.name}
                            onClick={() => onStrategyChange(strategy)}
                            aria-pressed={strategy.name === strategyName}
                            aria-label={`Score by ${strategy.name}: ${strategy.description}`}
                        >
                            {strategy.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Comparison table*/}
            <div
                className={className}
                role="table"
                aria-label="Vehicle comparison scores"
            >
                {/* Header row */}
                <div role="row" className={headerClassName}>
                    <span role="columnheader">Rank</span>
                    <span role="columnheader">Vehicle</span>
                    <span role="columnheader">Score</span>
                    <span role="columnheader">Power</span>
                    <span role="columnheader">0-100</span>
                    <span role="columnheader">Consumption</span>
                    <span role="columnheader">Range</span>
                    <span role="columnheader">Price</span>
                </div>

                {/* Data rows */}
                {scoredVehicles.map(({ vehicle, score, rank }) => (
                    <div key={vehicle.id} role="row" className={rowClassName}>
                        <span role="cell" aria-label="Rank">
                            #{rank}
                        </span>
                        <span role="cell">
                            <strong>
                                {vehicle.make} {vehicle.model}
                            </strong>
                            <small>
                                {vehicle.year} · {vehicle.fuelType}
                            </small>
                        </span>
                        <span
                            role="cell"
                            className={scoreClassName}
                            aria-label={`Score: ${score}`}
                        >
                            {score.toFixed(1)}
                        </span>
                        <span role="cell">{vehicle.specs.horsepower} hp</span>
                        <span role="cell">{vehicle.specs.acceleration}s</span>
                        <span role="cell">
                            {vehicle.specs.fuelEfficiency} L/100km
                        </span>
                        <span role="cell">{vehicle.specs.range} km</span>
                        <span role="cell">
                            {new Intl.NumberFormat("nl-NL", {
                                style: "currency",
                                currency: "EUR",
                                maximumFractionDigits: 0,
                            }).format(vehicle.price)}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

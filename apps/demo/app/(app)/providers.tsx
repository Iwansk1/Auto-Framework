"use client";

import { VehicleProvider, OccasionProvider } from "@automotive/react";
import { Vehicle, ConfiguratorOptions, Occasion } from "@automotive/core";

interface ProvidersProps {
    children: React.ReactNode;
    vehicles: Vehicle[];
    configuratorOptions: ConfiguratorOptions;
    occasions: Occasion[];
}

export function Providers({
    children,
    vehicles,
    configuratorOptions,
    occasions,
}: ProvidersProps) {
    return (
        <VehicleProvider
            vehicles={vehicles}
            configurationOptions={configuratorOptions}
        >
            <OccasionProvider occasions={occasions}>
                {children}
            </OccasionProvider>
        </VehicleProvider>
    );
}

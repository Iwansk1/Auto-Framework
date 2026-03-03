"use client";

import { VehicleProvider } from "@automotive/react";
import { Vehicle, ConfiguratorOptions } from "@automotive/core";

interface ProvidersProps {
    children: React.ReactNode;
    vehicles: Vehicle[];
    configuratorOptions: ConfiguratorOptions;
}

export function Providers({
    children,
    vehicles,
    configuratorOptions,
}: ProvidersProps) {
    return (
        <VehicleProvider
            vehicles={vehicles}
            configurationOptions={configuratorOptions}
        >
            {children}
        </VehicleProvider>
    );
}

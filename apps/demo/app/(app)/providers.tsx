"use client";

import { VehicleProvider } from "@automotive/react";
import { Vehicle } from "@automotive/core";

interface ProvidersProps {
    children: React.ReactNode;
    vehicles: Vehicle[];
}

export function Providers({ children, vehicles }: ProvidersProps) {
    return <VehicleProvider vehicles={vehicles}>{children}</VehicleProvider>;
}

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
export declare function VehicleCard({ vehicle, isSelected, onToggle, canSelect, className, selectedClassName, renderImage, renderBadge, renderActions, }: VehicleCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=VehicleCard.d.ts.map
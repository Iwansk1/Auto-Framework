"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCard = VehicleCard;
const jsx_runtime_1 = require("react/jsx-runtime");
function VehicleCard({ vehicle, isSelected = false, onToggle, canSelect = true, className = "", selectedClassName = "border-blue-500", renderImage, renderBadge, renderActions, }) {
    const handleToggle = () => {
        if (onToggle && (canSelect || isSelected)) {
            onToggle(vehicle);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("article", { "aria-label": `${vehicle.make} ${vehicle.model} ${vehicle.year}`, "aria-selected": isSelected, className: className, style: {
            backgroundColor: "var(--color-panel)",
            border: isSelected
                ? "1px solid var(--color-accent)"
                : "1px solid var(--color-border)",
            borderRadius: "16px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            transition: "border-color 0.2s, box-shadow 0.2s",
            boxShadow: isSelected
                ? "0 0 0 1px var(--color-accent), 0 8px 32px rgba(240,165,0,0.08)"
                : "0 4px 24px rgba(0,0,0,0.3)",
        }, children: [renderImage?.(vehicle), renderBadge?.(vehicle), (0, jsx_runtime_1.jsxs)("header", { style: { marginBottom: "16px" }, children: [(0, jsx_runtime_1.jsxs)("h2", { style: {
                            fontFamily: "var(--font-display)",
                            fontSize: "24px",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                            color: "var(--color-text)",
                            margin: "0 0 4px 0",
                        }, children: [vehicle.make, " ", vehicle.model] }), (0, jsx_runtime_1.jsx)("p", { style: {
                            fontSize: "13px",
                            color: "var(--color-muted)",
                            margin: 0,
                        }, children: vehicle.year })] }), (0, jsx_runtime_1.jsx)("dl", { style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "16px",
                }, children: [
                    {
                        label: "Price",
                        value: new Intl.NumberFormat("nl-NL", {
                            style: "currency",
                            currency: "EUR",
                            maximumFractionDigits: 0,
                        }).format(vehicle.price),
                    },
                    { label: "Power", value: `${vehicle.specs.horsepower} hp` },
                    {
                        label: "0–100 km/h",
                        value: `${vehicle.specs.acceleration}s`,
                    },
                    {
                        label: "Consumption",
                        value: `${vehicle.specs.fuelEfficiency} L/100km`,
                    },
                ].map(({ label, value }) => ((0, jsx_runtime_1.jsxs)("div", { style: {
                        backgroundColor: "var(--color-surface)",
                        borderRadius: "8px",
                        padding: "10px 12px",
                    }, children: [(0, jsx_runtime_1.jsx)("dt", { style: {
                                fontSize: "10px",
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "var(--color-muted)",
                                marginBottom: "4px",
                            }, children: label }), (0, jsx_runtime_1.jsx)("dd", { style: {
                                fontSize: "15px",
                                fontWeight: 500,
                                color: "var(--color-text)",
                                margin: 0,
                            }, children: value })] }, label))) }), renderActions?.(vehicle)] }));
}
//# sourceMappingURL=VehicleCard.js.map
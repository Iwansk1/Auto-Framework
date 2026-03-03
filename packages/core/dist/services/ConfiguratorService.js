"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguratorService = void 0;
class ConfiguratorService {
    constructor(options) {
        this.options = options;
    }
    createConfiguration(vehicle) {
        return {
            vehicle,
            selectedColor: null,
            selectedWheels: null,
            selectedPackages: [],
            totalPrice: vehicle.price,
        };
    }
    // Each method returns a NEW config - never mutate
    selectColor(config, colorId) {
        const color = this.options.colors.find((c) => c.id === colorId) ?? null;
        return this.recalculate({ ...config, selectedColor: color });
    }
    selectWheels(config, wheelId) {
        const wheels = this.options.wheels.find((w) => w.id === wheelId) ?? null;
        return this.recalculate({ ...config, selectedWheels: wheels });
    }
    togglePackage(config, packageId) {
        const pkg = this.options.packages.find((p) => p.id === packageId);
        if (!pkg)
            return config; // No change if package not found
        const alreadySelected = config.selectedPackages.some((p) => p.id === packageId);
        const selectedPackages = alreadySelected
            ? config.selectedPackages.filter((p) => p.id !== packageId) // Remove if already selected
            : [...config.selectedPackages, pkg]; // Add if not selected
        return this.recalculate({ ...config, selectedPackages });
    }
    getOptions() {
        return this.options;
    }
    recalculate(config) {
        const colorPrice = config.selectedColor?.priceModifier ?? 0;
        const wheelPrice = config.selectedWheels?.priceModifier ?? 0;
        const packagePrice = config.selectedPackages.reduce((sum, pkg) => sum + pkg.priceModifier, 0);
        return {
            ...config,
            totalPrice: config.vehicle.price + colorPrice + wheelPrice + packagePrice,
        };
    }
}
exports.ConfiguratorService = ConfiguratorService;
//# sourceMappingURL=ConfiguratorService.js.map
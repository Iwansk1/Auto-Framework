import { Vehicle } from "../models/Vehicle";
import { ColourOption, WheelOption, PackageOption, ConfiguratorOptions, VehicleConfiguration } from "../models/Configuration";

export class ConfiguratorService {
    private options: ConfiguratorOptions;

    constructor(options: ConfiguratorOptions) {
        this.options = options;
    }

    createConfiguration(vehicle: Vehicle): VehicleConfiguration {
        return {
            vehicle,
            selectedColour: null,
            selectedWheels: null,
            selectedPackages: [],
            totalPrice: vehicle.price,
        };
    }

    // Each method returns a NEW config - never mutate
    selectColour(config: VehicleConfiguration, colourId: string): VehicleConfiguration {
        const colour = this.options.colours.find((c) => c.id === colourId) ?? null;
        return this.recalculate({ ...config, selectedColour: colour });
    }

    selectWheels(config: VehicleConfiguration, wheelId: string): VehicleConfiguration {
        const wheels = this.options.wheels.find((w) => w.id === wheelId) ?? null;
        return this.recalculate({ ...config, selectedWheels: wheels });
    }

    togglePackage(config: VehicleConfiguration, packageId: string): VehicleConfiguration {
        const pkg = this.options.packages.find((p) => p.id === packageId);
        if (!pkg) return config; // No change if package not found

        const alreadySelected = config.selectedPackages.some((p) => p.id === packageId);

        const selectedPackages = alreadySelected
            ? config.selectedPackages.filter((p) => p.id !== packageId) // Remove if already selected
            : [...config.selectedPackages, pkg]; // Add if not selected

        return this.recalculate({ ...config, selectedPackages });
    }

    getOptions(): ConfiguratorOptions {
        return this.options;
    }

    private recalculate(config: VehicleConfiguration): VehicleConfiguration {
        const colourPrice = config.selectedColour?.priceModifier ?? 0;
        const wheelPrice = config.selectedWheels?.priceModifier ?? 0;
        const packagePrice = config.selectedPackages.reduce((sum, pkg) => sum + pkg.priceModifier, 0);

        return {
            ...config,
            totalPrice: config.vehicle.price + colourPrice + wheelPrice + packagePrice,
        };
    }
}

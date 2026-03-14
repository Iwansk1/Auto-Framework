import {
    AutomotiveAdapter,
    Vehicle,
    Occasion,
    ConfiguratorOptions,
} from "@automotive/core";

interface StaticAdapterOptions {
    vehicles?: Vehicle[];
    occasions?: Occasion[];
    configuratorOptions?: ConfiguratorOptions;
}

const defaultConfiguratorOptions: ConfiguratorOptions = {
    colors: [],
    wheels: [],
    packages: [],
};

export class StaticAdapter implements AutomotiveAdapter {
    private vehicles: Vehicle[];
    private occasions: Occasion[];
    private configuratorOptions: ConfiguratorOptions;

    constructor(options: StaticAdapterOptions = {}) {
        this.vehicles = options.vehicles ?? [];
        this.occasions = options.occasions ?? [];
        this.configuratorOptions =
            options.configuratorOptions ?? defaultConfiguratorOptions;
    }

    async getVehicles(): Promise<Vehicle[]> {
        return this.vehicles;
    }

    async getOccasions(): Promise<Occasion[]> {
        return this.occasions;
    }

    async getConfiguratorOptions(): Promise<ConfiguratorOptions> {
        return this.configuratorOptions;
    }
}

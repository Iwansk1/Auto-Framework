import { AutomotiveAdapter, Vehicle, Occasion, ConfiguratorOptions } from "@automotive/core";
interface StaticAdapterOptions {
    vehicles?: Vehicle[];
    occasions?: Occasion[];
    configuratorOptions?: ConfiguratorOptions;
}
export declare class StaticAdapter implements AutomotiveAdapter {
    private vehicles;
    private occasions;
    private configuratorOptions;
    constructor(options?: StaticAdapterOptions);
    getVehicles(): Promise<Vehicle[]>;
    getOccasions(): Promise<Occasion[]>;
    getConfiguratorOptions(): Promise<ConfiguratorOptions>;
}
export {};
//# sourceMappingURL=StaticAdapter.d.ts.map
import { AutomotiveAdapter, Vehicle, Occasion, ConfiguratorOptions } from "@automotive/core";
interface RestAdapterOptions {
    baseUrl: string;
}
export declare class RestAdapter implements AutomotiveAdapter {
    private baseUrl;
    constructor({ baseUrl }: RestAdapterOptions);
    private fetch;
    getVehicles(): Promise<Vehicle[]>;
    getOccasions(): Promise<Occasion[]>;
    getConfiguratorOptions(): Promise<ConfiguratorOptions>;
}
export {};
//# sourceMappingURL=RestAdapter.d.ts.map
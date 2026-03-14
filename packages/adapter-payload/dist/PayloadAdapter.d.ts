import { AutomotiveAdapter, Vehicle, Occasion, ConfiguratorOptions } from "@automotive/core";
interface PayloadClient {
    find(args: {
        collection: string;
        where?: Record<string, unknown>;
        limit?: number;
    }): Promise<{
        docs: unknown[];
    }>;
}
interface PayloadAdapterOptions {
    payload: PayloadClient;
    serverUrl: string;
}
export declare class PayloadAdapter implements AutomotiveAdapter {
    private payload;
    private serverUrl;
    constructor({ payload, serverUrl }: PayloadAdapterOptions);
    getVehicles(): Promise<Vehicle[]>;
    getOccasions(): Promise<Occasion[]>;
    getConfiguratorOptions(): Promise<ConfiguratorOptions>;
}
export {};
//# sourceMappingURL=PayloadAdapter.d.ts.map
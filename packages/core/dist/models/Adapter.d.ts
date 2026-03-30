import { Vehicle } from "./Vehicle";
import { Occasion } from "./Occasion";
import { ConfiguratorOptions } from "./Configuration";
export interface AutomotiveAdapter {
    getVehicles(): Promise<Vehicle[]>;
    getOccasions(): Promise<Occasion[]>;
    getConfiguratorOptions(): Promise<ConfiguratorOptions>;
}
//# sourceMappingURL=Adapter.d.ts.map
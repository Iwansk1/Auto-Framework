import { Vehicle } from "../models/Vehicle";
import { ConfiguratorOptions, VehicleConfiguration } from "../models/Configuration";
export declare class ConfiguratorService {
    private options;
    constructor(options: ConfiguratorOptions);
    createConfiguration(vehicle: Vehicle): VehicleConfiguration;
    selectColour(config: VehicleConfiguration, colourId: string): VehicleConfiguration;
    selectWheels(config: VehicleConfiguration, wheelId: string): VehicleConfiguration;
    togglePackage(config: VehicleConfiguration, packageId: string): VehicleConfiguration;
    getOptions(): ConfiguratorOptions;
    private recalculate;
}
//# sourceMappingURL=ConfiguratorService.d.ts.map
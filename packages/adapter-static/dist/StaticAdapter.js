"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticAdapter = void 0;
const defaultConfiguratorOptions = {
    colors: [],
    wheels: [],
    packages: [],
};
class StaticAdapter {
    constructor(options = {}) {
        this.vehicles = options.vehicles ?? [];
        this.occasions = options.occasions ?? [];
        this.configuratorOptions =
            options.configuratorOptions ?? defaultConfiguratorOptions;
    }
    async getVehicles() {
        return this.vehicles;
    }
    async getOccasions() {
        return this.occasions;
    }
    async getConfiguratorOptions() {
        return this.configuratorOptions;
    }
}
exports.StaticAdapter = StaticAdapter;

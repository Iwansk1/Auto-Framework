import { useEffect, useState } from "react";
import { VehicleProvider } from "@automotive/react";
import { StaticAdapter } from "@automotive/adapter-static";
import type { Vehicle, ConfiguratorOptions } from "@automotive/core";
import { vehicles as vehicleData } from "./data/vehicles";
import { configuratorOptions as optionsData } from "./data/configuratorOptions";
import App from "./App";

const adapter = new StaticAdapter({
    vehicles: vehicleData,
    configuratorOptions: optionsData,
});

export default function Root() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [configuratorOptions, setConfiguratorOptions] =
        useState<ConfiguratorOptions>({
            colors: [],
            wheels: [],
            packages: [],
        });

    useEffect(() => {
        async function load() {
            const [v, o] = await Promise.all([
                adapter.getVehicles(),
                adapter.getConfiguratorOptions(),
            ]);
            setVehicles(v);
            setConfiguratorOptions(o);
        }
        load();
    }, []);

    return (
        <VehicleProvider
            vehicles={vehicles}
            configurationOptions={configuratorOptions}
        >
            <App />
        </VehicleProvider>
    );
}

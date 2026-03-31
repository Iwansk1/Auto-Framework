import { Providers } from "./providers";
import { RestAdapter } from "@automotive/adapter-rest";
import { cache } from "react";
import "./globals.css";

export const metadata = {
    title: "Automotive Framework — Next.js + REST",
    description: "Demo using the REST adapter",
};

const getData = cache(async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
        throw new Error("Missing NEXT_PUBLIC_API_URL");
    }

    const adapter = new RestAdapter({ baseUrl });

    return Promise.all([adapter.getVehicles(), adapter.getOccasions(), adapter.getConfiguratorOptions()]);
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const [vehicles, occasions, configuratorOptions] = await getData();

    return (
        <html lang="en">
            <body style={{ backgroundColor: "#1e1e21" }}>
                <Providers vehicles={vehicles} configuratorOptions={configuratorOptions} occasions={occasions}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

import { Providers } from "./providers";
import { RestAdapter } from "@automotive/adapter-rest";
import "./globals.css";
export const metadata = {
    title: "Automotive Framework — Next.js + REST",
    description: "Demo using the REST adapter",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const adapter = new RestAdapter({
        baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
    });

    const [vehicles, occasions, configuratorOptions] = await Promise.all([
        adapter.getVehicles(),
        adapter.getOccasions(),
        adapter.getConfiguratorOptions(),
    ]);

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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "./components/Nav";
import { PayloadAdapter } from "@automotive/adapter-payload";
import { getPayloadClient } from "../../lib/payload";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Automotive Framework Demo",
    description: "A headless automotive framework for React and Next.js",
};

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const payload = await getPayloadClient();

    const adapter = new PayloadAdapter({
        payload,
        serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000",
    });

    const [vehicles, occasions, configuratorOptions] = await Promise.all([
        adapter.getVehicles(),
        adapter.getOccasions(),
        adapter.getConfiguratorOptions(),
    ]);

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Providers vehicles={vehicles} configuratorOptions={configuratorOptions} occasions={occasions}>
                    <Nav />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}

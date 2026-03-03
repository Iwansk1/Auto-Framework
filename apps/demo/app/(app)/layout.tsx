import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "./components/Nav";
import { getVehicles } from "@/lib/getVehicles";
import { getConfiguratorOptions } from "@/lib/getConfiguratorOptions";

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

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [vehicles, configuratorOptions] = await Promise.all([
        getVehicles(),
        getConfiguratorOptions(),
    ]);

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers
                    vehicles={vehicles}
                    configuratorOptions={configuratorOptions}
                >
                    <Nav />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}

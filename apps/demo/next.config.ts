import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["@automotive/core", "@automotive/react"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/api/media/file/**",
            },
        ],
        // Allow local IP addresses in development
        dangerouslyAllowSVG: true,
        unoptimized: process.env.NODE_ENV === "development",
    },
};

export default withPayload(nextConfig);

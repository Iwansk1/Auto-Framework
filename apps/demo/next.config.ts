import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    transpilePackages: ["@automotive/core", "@automotive/react"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "auto-framework-demo.vercel.app",
                pathname: "/api/media/file/**",
            },
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
    },
};

export default withPayload(nextConfig);

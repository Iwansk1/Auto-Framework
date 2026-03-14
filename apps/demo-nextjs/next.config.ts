import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: [
        "@automotive/core",
        "@automotive/react",
        "@automotive/adapter-rest",
    ],
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/api/media/file/**",
            },
        ],
        unoptimized: process.env.NODE_ENV === "development",
    },
};

export default nextConfig;

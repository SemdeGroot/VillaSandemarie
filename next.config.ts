import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  allowedDevOrigins: ["192.168.178.33", "localhost", "127.0.0.1"],
  async redirects() {
    return [
      { source: "/over-ons", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;

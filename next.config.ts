import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shop",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

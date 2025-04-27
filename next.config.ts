import type { NextConfig } from "next";

const images = {
  unoptimized: true,
};

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  exportTrailingSlash: true,

  images,

};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/restaurant-template",
  assetPrefix: "/restaurant-template",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

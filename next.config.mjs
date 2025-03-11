/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // basePath aus der Umgebungsvariable
  images: { unoptimized: true },
};

export default nextConfig;

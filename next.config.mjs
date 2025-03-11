/** @type {import('next').NextConfig} */
const nextConfig = {

  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // Optional, je nach Wunsch des Basis-Pfads
  
  images: { unoptimized: true }, // Bilder werden nicht optimiert
};

export default nextConfig;

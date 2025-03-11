import dotenv from 'dotenv';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/restaurant-template' : '',
  images: { unoptimized: true },
};

export default nextConfig;

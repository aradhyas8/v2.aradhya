/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Lets a preview server run beside `npm run dev` without sharing (and corrupting) .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;

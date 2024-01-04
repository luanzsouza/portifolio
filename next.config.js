/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/portifolio" : "";

module.exports = {
  basePath: prefix,
  assetPrefix: prefix,
};
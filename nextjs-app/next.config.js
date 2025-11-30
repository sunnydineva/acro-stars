const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // казваме на Next да прави статичен export в ./out
  images: {
    unoptimized: true,       // нужно за GitHub Pages (без image optimization)
  },
  // repo-то ти в GitHub  URL ще е https://username.github.io/Acro-Stars/
  // тогава basePath и assetPrefix трябва да са "/acro-stars"
  basePath: isProd ? "/acro-stars" : "",
  assetPrefix: isProd ? "/acro-stars" : "",
};

module.exports = nextConfig;

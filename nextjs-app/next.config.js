/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // казваме на Next да прави статичен export в ./out
  images: {
    unoptimized: true,       // нужно за GitHub Pages (без image optimization)
  },
  // repo-то ти в GitHub  URL ще е https://username.github.io/Acro-Stars/
  // тогава basePath и assetPrefix трябва да са "/Acro-Stars"
  basePath: "/Acro-Stars",
  assetPrefix: "/Acro-Stars/",
};

module.exports = nextConfig;

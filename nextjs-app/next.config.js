const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  ...(isGithubPages
    ? { basePath: "/acro-stars", assetPrefix: "/acro-stars" }
    : {}),
};

module.exports = nextConfig;

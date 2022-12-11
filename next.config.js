/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.wikia.nocookie.net", "disney.fandom.com"],
  },
};

module.exports = nextConfig;

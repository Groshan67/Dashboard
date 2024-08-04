/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard", // The new page you want to redirect to
        permanent: true, // This will be a 308 permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;

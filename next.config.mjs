/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/hire-developers/:path*",
        destination: "/hire-talent/",
        permanent: true
      },
      {
        source: "/about-us/:path*",
        destination: "/about/",
        permanent: true
      },
      {
        source: "/service/:path*",
        destination: "/services/",
        permanent: true
      },
      {
        source: "/hire-talent/Oldindex.html",
        destination: "/hire-talent/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

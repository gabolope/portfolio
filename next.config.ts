import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gabriellopez.com.ar" }],
        destination: "https://gabriellopez.com.ar/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

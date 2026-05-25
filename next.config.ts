/** @type {import('next').NextConfig} */
const nextConfig = {

  allowedDevOrigins: [
    "2.24.85.242",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Temporary for deployment
  },
  typescript: {
    ignoreBuildErrors: true, // Temporary if you have TS errors
  },
  images: {
    domains: ['jsonplaceholder.typicode.com'],
  }
}

module.exports = nextConfig
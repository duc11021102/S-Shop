/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'images.pexels.com'], // Thêm tên miền vào danh sách
  },
}

module.exports = nextConfig

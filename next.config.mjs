/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Menentukan pola URL yang diizinkan untuk digunakan dalam elemen gambar
    domains: [
      'storage.googleapis.com',
      'asset.kompas.com',
      'images.pexels.com',
      'upload.wikimedia.org',
      'static.promediateknologi.id',
    ],
  },
};

export default nextConfig;

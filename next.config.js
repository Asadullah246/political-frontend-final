/** @type {import('next').NextConfig} */
// const nextConfig = {
//   // distDir: 'build',
//   images: {
//     domains:
//       ['localhost', 'localhost:5000','http://localhost:5000','https://ui-avatars.com']

//   }

// }

// module.exports = nextConfig

// next.config.js
module.exports = {
  // Your existing configuration options
  images: {
    domains: ['localhost','utfs.io', 'localhost:5000', 'http://localhost:5000', 'ui-avatars.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};


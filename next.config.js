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
    domains: ['localhost','utfs.io','backend.politiq-global.comnull', 'localhost:5000', 'http://localhost:5000', 'ui-avatars.com','http://backend.politiq-global.com',"backend.politiq-global.com","backend.politiq-global.comundefined"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};


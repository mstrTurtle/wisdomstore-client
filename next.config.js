module.exports = {
  reactStrictMode: true,
  rewrites: async () =>  [
      {
        source: "/api",
        destination: 'http://114.132.189.242:7000',
      },
      {
        source: "/api/:path*",
        destination: 'http://114.132.189.242:7000/:path*',
      },
    ],
};
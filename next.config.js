module.exports = {
  reactStrictMode: true,
  rewrites: async () =>  [
      {
        source: "/myapi",
        destination: 'http://114.132.189.242:7000',
      },
      {
        source: "/myapi/:path*",
        destination: 'http://114.132.189.242:7000/:path*',
      },
    ],
};
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors 'self' http://localhost:* https://your-vercel-app.vercel.app https://secure-mobile.walletconnect.com https://secure-mobile.walletconnect.org`,
          },
        ],
      },
    ];
  },
}

// module.exports = nextConfig

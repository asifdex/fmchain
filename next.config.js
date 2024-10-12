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
            value: `frame-ancestors 'self' http://localhost:* https://fmchain.vercel.app https://secure-mobile.walletconnect.com https://secure-mobile.walletconnect.org`,
          },
          {
            key: 'Set-Cookie',
            value: '__Host-vercel_live_token=; SameSite=None; Secure',
          },
        ],
      },
    ];
  },
}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https://trusted.cdn.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              connect-src 'self' wss://trusted.websocket.com;
              frame-ancestors 'self' http://localhost:* https://fmchain.vercel.app https://*.pages.dev https://*.ngrok-free.app https://secure-mobile.walletconnect.com https://secure-mobile.walletconnect.org https://vercel.live;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

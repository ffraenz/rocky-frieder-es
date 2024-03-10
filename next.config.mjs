/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, s-maxage=900'
          }
        ]
      }
    ]
  }
}

export default nextConfig

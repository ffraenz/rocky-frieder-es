/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=1800'
          }
        ]
      }
    ]
  }
}

export default nextConfig

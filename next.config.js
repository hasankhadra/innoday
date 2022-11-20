/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        APP_ID: process.env.APP_ID,
        MEASUREMENT_ID: process.env.MEASUREMENT_ID,
        BASE_API: process.env.BASE_API,
        TEST_ENV_ENV: process.env.TEST_ENV_ENV,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination:
                    'https://innoday-developer-edition.eu44.force.com/services/apexrest/:path*',
            },
        ]
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig

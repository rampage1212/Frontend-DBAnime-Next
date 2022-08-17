/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales: ['en-US', 'in-ID'],
    defaultLocale: 'in-ID',
    localeDetection: true
  }
}

module.exports = nextConfig

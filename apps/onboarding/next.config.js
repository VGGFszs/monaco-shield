/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@monaco-shield/ui', '@monaco-shield/config'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'it'],
    localeDetection: false
  }
};

module.exports = nextConfig; 
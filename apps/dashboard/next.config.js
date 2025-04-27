const { i18n } = require('@monaco-shield/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  transpilePackages: ['@monaco-shield/ui', '@monaco-shield/config'],
}

module.exports = nextConfig 
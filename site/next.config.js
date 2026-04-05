/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Hendriks Registry',
    description: 'My list of Kasm workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://hendrik2510.github.io/kasm-registry/',
    contactUrl: 'https://github.com/hendrik2510/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

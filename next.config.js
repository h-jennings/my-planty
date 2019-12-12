require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    MP_FAUNADB_SECRET_KEY: process.env.MP_FAUNADB_SECRET_KEY,
    MP_FAUNADB_API_ENDPOINT: process.env.MP_FAUNADB_API_ENDPOINT,
  },
};

module.exports = withPlugins([withSass], nextConfig);

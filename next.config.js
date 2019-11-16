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
};

module.exports = withPlugins([withSass], nextConfig);

export default {
  targets: {
    ie: 10,
  },
  dva: {},
  antd: {},
  chainWebpack(config) {
    config.merge({
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|less)$/,
              chunks: 'async',
              minChunks: 2,
              minSize: 0,
            },
            vendors: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
              chunks: 'all',
              minSize: 30000,
              minChunks: 3,
              automaticNameDelimiter: '.',
            },
          },
        },
      },
    });
  },
  ignoreMomentLocale: true,
  metas: [{ 'http-equiv': 'A-UA-Compatible', content: 'IE=Edge,chrome=1' }],
  extraBabelPlugins: ['lodash'],
  plugins: ['lodash-webpack-plugin'],
};

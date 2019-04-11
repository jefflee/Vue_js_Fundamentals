module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.coffee$/,
      use: ['coffee-loader'],
    });

    const newRule = {
      test: /\.(png|jpe?g|gif)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 5000,
            name: 'img/[name].[hash:8].[ext]',
          },
        },
      ],
    };

    const imagesRuleIndex = config.module.rules
      .findIndex(x => x.test.source.includes('png|jpe?g|gif'));

    config.module.rules.splice(imagesRuleIndex, 1, newRule);
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};


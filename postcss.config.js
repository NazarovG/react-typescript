module.exports = {
  plugins: {
    autoprefixer: {},
    'css-mqpacker': {
      sort: true,
    },
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};

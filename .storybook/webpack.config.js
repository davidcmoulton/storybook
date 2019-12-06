module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /^.*(\.libero-bundle).*\.js$/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });

  config.module.rules.push({
    test: /\.jpg$/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });

  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
          allow_async: true,
          autoescape: true,
          strict_variables: true,
        },
      },
    ],
  });

  return config;
};

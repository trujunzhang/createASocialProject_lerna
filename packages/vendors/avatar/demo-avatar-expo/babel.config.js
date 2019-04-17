module.exports = function (api) {
  if (!!api) {
    api.cache(true)
  };
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-typescript"
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {

        }
      ]
    ]
  };
};

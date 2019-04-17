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
      ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
      [
        "@babel/plugin-transform-runtime",
        {

        }
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true
        }
      ],
      [
        "module-resolver",
        {
          "cwd": "babelrc",
          "root": [
            "."
          ],
          "extensions": [".ios.js", ".android.js", ".js", ".jsx", ".json"],
          "alias": {
          }
        }
      ]
    ]
  };
};

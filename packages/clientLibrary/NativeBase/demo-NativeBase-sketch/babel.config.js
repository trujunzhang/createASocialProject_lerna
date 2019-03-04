module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-typescript"
    ],
    plugins: [
      ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
      [
        "@babel/plugin-transform-runtime",
        {
          "corejs": false,
          "helpers": true,
          "regenerator": true,
          "useESModules": false
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

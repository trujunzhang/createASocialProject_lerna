module.exports = function (api) {
  api.cache(true);
  return {
    presets: [

      "@babel/preset-typescript"
    ],
    plugins: [
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
          "extensions": [".sketch.js", ".sketch.jsx", ".js", ".jsx", ".json"],
          "alias": {
            "^react-native$": "react-primitives"
          }
        }
      ]
    ]
  };
};

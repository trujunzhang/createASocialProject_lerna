module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@babel/env",
      "@babel/preset-react",
      "@babel/typescript"
    ],
    plugins: [
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      [
        "@babel/plugin-transform-runtime",
        {
          "corejs": false,
          "helpers": true,
          "regenerator": true,
          "useESModules": false
        }
      ]
    ]
  }
};
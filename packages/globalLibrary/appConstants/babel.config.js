module.exports = function (api) {
  api.cache(true);
  return {
    "presets": [
      "@babel/preset-env",
      "@babel/typescript"
    ],
    "plugins": [
      "@babel/proposal-class-properties",
      ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
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
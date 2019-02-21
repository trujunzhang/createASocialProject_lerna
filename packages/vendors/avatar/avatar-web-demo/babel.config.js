module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "next/babel",
      "@zeit/next-typescript/babel"
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

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "next/babel",
      "@zeit/next-typescript/babel"
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
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
          "root": ["./"],
          "alias": {
            "^react-native$": "react-native-web"
          }
        }
      ]
    ]
  };
};

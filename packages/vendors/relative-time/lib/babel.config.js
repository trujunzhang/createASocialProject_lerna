module.exports = function (api) {
  if (!!api) {
    api.cache(false)
  };
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry"
        }
      ],
      [
        "@babel/preset-react",
        {
          development: process.env.BABEL_ENV === "development",
        },
      ],
      "@babel/preset-typescript"
    ],
    plugins: [
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
      [
        "@babel/plugin-transform-runtime",
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: false
        }
      ]
    ]
  }
};

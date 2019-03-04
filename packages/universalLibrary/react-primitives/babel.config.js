module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry"
        }
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
      ],
      [
        "module-resolver",
        {
          "alias": {
          },
          "cwd": "babelrc"
        }
      ]
    ]
  }
}

module.exports = function (api) {
  if (!!api) {
    api.cache(true)
  }
  return {
    presets: [
      [
        "@babel/preset-env",
        {
        }
      ],
      [
        "@babel/preset-react",
        {
          development: false
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

        }
      ],
      [
        "module-resolver",
        {
          root: ['./src'],
          "alias": {
          },
          "cwd": "babelrc"
        }
      ]
    ]
  }
}

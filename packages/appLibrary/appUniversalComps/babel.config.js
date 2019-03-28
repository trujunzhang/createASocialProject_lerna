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
          "cwd": "babelrc",
          "alias": {
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.jsx',
            '.android.ts',
            '.android.tsx',
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
            '.sketch.jsx',
            '.sketch.js',
            '.sketch.ts',
            '.sketch.tsx',
            '.ios.jsx',
            '.ios.js',
            '.ios.ts',
            '.ios.tsx'
          ],
        }
      ]
    ]
  }
}
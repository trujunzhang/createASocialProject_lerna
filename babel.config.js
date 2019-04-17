const nativeBaseAlias = {
            '@appUtils': './packages/clientLibrary/NativeBase/lib/src/utils',
            '@appBasic': './packages/clientLibrary/NativeBase/lib/src/basic',
            '@appTheme': './packages/clientLibrary/NativeBase/lib/src/theme',
            '@appVariables': './packages/clientLibrary/NativeBase/lib/src/variables'
}

const defaultAlias = {
  // 'native-base-shoutem-theme/*': './packages/clientLibrary/NativeBase/native-base-shoutem-theme/src/*',
  'native-base-shoutem-theme': './packages/clientLibrary/NativeBase/native-base-shoutem-theme/src'
};

module.exports = function (api) {
  if (!!api) {
    api.cache(true)
  };
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
      ["@babel/plugin-transform-runtime",{}],
      [
        "module-resolver",
        {
          "cwd": "babelrc",
          "alias": {
            ...defaultAlias,
            ...nativeBaseAlias,
            '@appVendor': './src/vendor'
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
};

module.exports = function (api) {
  if (!!api) {
    api.cache(true)
  }
  return {
    presets: [
      [
        '@babel/preset-env',
        {
        }
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV === 'development'
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
      [
        '@babel/plugin-transform-runtime',
        {

        }
      ],
      [
        'module-resolver',
        {
          cwd: 'babelrc',
          root: ['.'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.sketch.jsx',
            '.sketch.js',
            '.sketch.ts',
            '.sketch.tsx'
          ],
          alias: {}
        }
      ]
    ]
  }
}

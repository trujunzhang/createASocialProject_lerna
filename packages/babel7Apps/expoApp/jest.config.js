const transformIgnorePatternsArray = [
  'react-native',
  'react-navigation',
  '@react-navigation',
  'static-container',
  'tcomb-form-native'
]

module.exports = {
  preset: "jest-expo",
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testMatch: ['**/*.test.ts?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/production-server/',
    '<rootDir>/production-cloud/',
    '<rootDir>/.check/',
    '<rootDir>/.next/',
    '<rootDir>/.jest/',
    '<rootDir>/.vscode/',
    '<rootDir>/.idea/',
    '<rootDir>/__mock__/',
    '<rootDir>/node_modules/'
  ],
  setupFiles: ['<rootDir>/jest/shims.client.tsx'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '^@config(.*)$': '<rootDir>/config$1',
    '^@src(.*)$': '<rootDir>/src$1',
    '^@assets(.*)$': '<rootDir>/static$1',
    '^@client(.*)$': '<rootDir>/apps/client$1',
    'parse/react-native': '<rootDir>/node_modules/parse/lib/node/Parse.js'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'ios.ts',
    'ios.tsx',
    'android.ts',
    'android,.tsx'
  ],
  transformIgnorePatterns: [`node_modules/(?!(jest-)?${transformIgnorePatternsArray.join('|')})`]
}

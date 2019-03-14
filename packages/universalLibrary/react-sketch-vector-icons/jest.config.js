const allPathIgnorePatterns = [
  '<rootDir>/bin/',
  '<rootDir>/generate/',
  '<rootDir>/.check/',
  '<rootDir>/.circleci/',
  '<rootDir>/.idea/',
  '<rootDir>/.next/',
  '<rootDir>/.vscode/',
  '<rootDir>/config/',
  '<rootDir>/coverage/',
  '<rootDir>/jest/',
  '<rootDir>/production-server/',
  '<rootDir>/production-cloud/',
  '<rootDir>/public/',
  '<rootDir>/static/',
  '<rootDir>/build/',
  '<rootDir>/dist/',
  '<rootDir>/styles/',
  '<rootDir>/node_modules/'
]

const transformIgnorePatternsArray = [
  'react-native',
  'react-navigation',
  '@react-navigation',
  'static-container',
  'tcomb-form-native'
]

module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
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
  testMatch: ['**/*.test.ts?(x)'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: allPathIgnorePatterns,
  transformIgnorePatterns: [`node_modules/(?!(jest-)?${transformIgnorePatternsArray.join('|')})`],
  collectCoverage: true,
  coveragePathIgnorePatterns: allPathIgnorePatterns
}

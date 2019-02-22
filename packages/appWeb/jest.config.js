const allPathIgnorePatterns = [
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
  '<rootDir>/styles/',
  '<rootDir>/node_modules/'
]

module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testMatch: ['**/*.test.ts?(x)'],
  setupFiles: ['<rootDir>/jest/shims.web.tsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@config(.*)$': '<rootDir>/config$1',
    '^@src(.*)$': '<rootDir>/src$1',
    '^@assets(.*)$': '<rootDir>/static$1',
    '^@web(.*)$': '<rootDir>/apps/web$1',
    'parse/react-native': '<rootDir>/node_modules/parse/lib/node/Parse.js'
  },
  testPathIgnorePatterns: allPathIgnorePatterns,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coveragePathIgnorePatterns: allPathIgnorePatterns
};

module.exports = {
  haste: {
    defaultPlatform: 'sketch',
    platforms: ['android', 'ios', 'native', 'sketch'],
    providesModuleNodeModules: ['react-native', 'react-sketchapp']
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@shoutem|react-clone-referenced-element|native-base-shoutem-theme)'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg)$": "jest-static-stubs/jpg",
    "^.+\\.(png)$": "jest-static-stubs/png",
    "^.+\\.(eot|otf|svg|ttf|woff|woff2|mp3|m4a|aac|oga)$": "identity-obj-proxy",
  },
  testMatch: ['**/*.test.ts?(x)'],
  // testPathIgnorePatterns: ["/dist/", "/node_modules/"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true
}

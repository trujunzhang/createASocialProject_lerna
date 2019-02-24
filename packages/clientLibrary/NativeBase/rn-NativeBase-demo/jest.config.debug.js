module.exports = {
    preset: "react-native",
    transform: {
        "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
        "\\.jsx$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
    },
    setupTestFrameworkScriptFile: "<rootDir>/jest/setupEnzyme.tsx",
    setupFiles: [
        "<rootDir>/jest/shims.debug.tsx"
    ],
    moduleNameMapper: {
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "ios.ts",
        "ios.tsx",
        "android.ts",
        "android,.tsx"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-navigation)"
    ],
    // cacheDirectory: ".jest/cache",
    // testPathIgnorePatterns: ["<rootDir>/__tests__/setup/"],
    testPathIgnorePatterns: ["<rootDir>/e2e/", "<rootDir>/node_modules/", "<rootDir>/jest/"],
};

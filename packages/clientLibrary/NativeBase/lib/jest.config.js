module.exports = {
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    testMatch: ['**/*.test.ts?(x)'],
    testPathIgnorePatterns: ["/dist/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
};

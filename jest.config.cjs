module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    coveragePathIgnorePatterns: [
      '/src/utils/turn-helpers.js'
    ],
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverage: true, 
    coverageReporters: ['text-summary', 'lcov'],
    coverageThreshold: {
      global: {
        statements: 80
      }
    }
};
module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    coveragePathIgnorePatterns: [
      '/src/utils/turnHelpers.js'
    ],
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverage: true, 
    coverageReporters: ['text-summary', 'lcov']
    
};
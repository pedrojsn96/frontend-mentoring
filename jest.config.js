module.exports = {
  collectCoverageFrom: ['src/**.js'],
  collectCoverage: true,
  coverageDirectory: '__reports__/jest',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};

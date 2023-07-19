module.exports = {
    files: ['src/**/*.test.js'],
    sources: ['src/**/*.js'],
    require: ['vitest'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(vitest)/)'],
  };
  
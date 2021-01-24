const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 50,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js)$',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file.js',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/setupTests.js',
  ],
  snapshotSerializers: [
    'jest-styled-components/serializer',
  ],
};

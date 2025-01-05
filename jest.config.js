module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^common-util/(.*)$': '<rootDir>/src/common-util/$1',
    '^apis/(.*)$': '<rootDir>/src/apis/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
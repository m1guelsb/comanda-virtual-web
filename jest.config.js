import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
  },
  testEnvironment: 'jest-environment-jsdom',
  resolver: './jest.resolver.js',
};

export default createJestConfig(customJestConfig);

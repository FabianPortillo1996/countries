import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load `next.config.js` and `.env` files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/_mock/svgrMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',

    '^@/public/(.*)$': '<rootDir>/public/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!./src/**/*.stories.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/',
    '<rootDir>/__checks__/',
  ],
};

const jestConfigWithOverrides = async () => {
  const configFn = createJestConfig(config);
  const res = await configFn();

  res.moduleNameMapper = {
    // We cannot depend on the exact key used by Next.js
    // so we inject an SVG key higher up on the mapping tree
    '\\.svg': '<rootDir>/_mock/svgrMock.ts',
    ...res.moduleNameMapper,
  };

  return res;
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default jestConfigWithOverrides;

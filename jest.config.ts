import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageReporters: [
    'text',   // 콘솔 출력
    'lcov',   // HTML 형식의 보고서
    'json',   // JSON 형식의 보고서 (파일 경로 포함)
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.spec.ts',
    '!**/vendor/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/__mocks__/svgTransform.cjs',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage',
    'package.json',
    'package-lock.json',
    'reportWebVitals.ts',
    'setupTests.ts',
    'index.tsx'
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/fileMock.cjs',
  },
};

export default config;

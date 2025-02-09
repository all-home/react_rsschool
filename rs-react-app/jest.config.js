module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript
    testEnvironment: 'jsdom', // Test environment for React
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions to handle
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Match test files
    collectCoverage: true, // Enable coverage
    collectCoverageFrom: ['**/*.tsx'], // Include only .tsx files
    coveragePathIgnorePatterns: [
      '**/node_modules/**',
      '**/*.test.tsx',
      '**/*.spec.tsx',
      'src/__tests__/setup.ts',
      'src/App.tsx', // Exclude App.tsx from coverage
    ],
    coverageThreshold: {
      global: {
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
    },
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'], // Setup file for React Testing Library
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform .ts and .tsx files with ts-jest
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Optional: Map aliases for imports
    },
  };
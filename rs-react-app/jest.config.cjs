module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Ensure this is set to 'jsdom'
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  collectCoverage: true,
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
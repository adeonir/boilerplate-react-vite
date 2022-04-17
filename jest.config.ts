const assetsKey =
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$'

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.d.ts(x)?',
    '!src/mocks/**/*.ts(x)?',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.ts',
    '!src/main.tsx',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'src/mocks'],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/src/mocks/svg.ts',
    [assetsKey]: 'ts-jest',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.svg$': 'ts-jest',
    [assetsKey]: 'ts-jest',
  },
}

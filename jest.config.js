module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|react-navigation|@react-navigation/.*)"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
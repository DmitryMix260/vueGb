module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "jest": {
    "testEnvironment": "jsdom",
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!coverage/**"
    ]
  },
}

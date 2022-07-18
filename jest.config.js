module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  jest: {
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
      'js',
      'vue'
    ],
    transform: {
      '.*\\.(vue)$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{js,vue}',
      '!**/node_modules/**',
      '!coverage/**'
    ]
  }
}

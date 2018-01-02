module.exports = {
  'moduleNameMapper': {
    '^vue$': 'vue/dist/vue.common.js',
    '~(.*)': '<rootDir>/src/app$1',
    '~/shared(.*)': '<rootDir>/src/app/shared$1'
  },
  'moduleFileExtensions': ['js', 'vue'],
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  }
};
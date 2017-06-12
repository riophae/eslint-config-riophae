'use strict'

module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/variables',
    './rules/node',
    './rules/style'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    node: true,
    es6: true,
    browser: true
  },
  rules: {
    strict: [ 'error', 'never' ]
  }
}

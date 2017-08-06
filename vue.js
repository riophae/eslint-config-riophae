'use strict'

module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/variables',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/import',
    './rules/vue',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'func-names': [ 'error', 'as-needed' ],
    'strict': [ 'error', 'never' ],
  },
}

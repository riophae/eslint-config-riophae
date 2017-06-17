'use strict'

module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/variables',
    './rules/node',
    './rules/style',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'func-names': [ 'error', 'always' ],
    'strict': [ 'error', 'global' ],
  },
}

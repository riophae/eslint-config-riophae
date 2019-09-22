'use strict'

module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/node',
    './rules/style',
    './rules/unicorn',
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
    'unicorn/no-for-loop': 'off',
    'unicorn/prefer-exponentiation-operator': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-starts-ends-with': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'func-names': [ 'error', 'always' ],
  },
}

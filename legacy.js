'use strict'

module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/nodejs-and-commonjs',
    './rules/stylistic-issues',
    './rules/plugin-unicorn',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  env: {
    node: true,
    es6: false,
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

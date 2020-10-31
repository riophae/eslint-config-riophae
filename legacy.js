'use strict'

module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/stylistic-issues',
    './rules/plugin-node',
    './rules/plugin-unicorn',
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
    'unicorn/prefer-array-find': 'off',
    'unicorn/prefer-includes': 'off',
    'unicorn/prefer-math-trunc': 'off',
    'unicorn/prefer-replace-all': 'off',
    'unicorn/prefer-starts-ends-with': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'func-names': [ 'error', 'always' ],
    'prefer-exponentiation-operator': 'off',
  },
}

'use strict'

module.exports = {
  extends: [
    './core/legacy',
    './plugin-node',
    './plugin-unicorn',
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
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-replace-all': 'off',
    'unicorn/prefer-starts-ends-with': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'func-names': [ 'error', 'always' ],
    'prefer-exponentiation-operator': 'off',
  },
}

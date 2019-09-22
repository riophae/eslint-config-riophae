'use strict'

module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/unicorn',
    './rules/import',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
}

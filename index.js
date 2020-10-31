'use strict'

module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/stylistic-issues',
    './rules/ecmascript-6',
    './rules/plugin-node',
    './rules/plugin-unicorn',
    './rules/plugin-import',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
}

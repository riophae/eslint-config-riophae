'use strict'

module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/nodejs-and-commonjs',
    './rules/stylistic-issues',
    './rules/ecmascript-6',
    './rules/plugin-unicorn',
    './rules/plugin-import',
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

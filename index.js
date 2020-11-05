'use strict'

module.exports = {
  extends: [
    './core/modern',
    './plugin-node',
    './plugin-unicorn',
    './plugin-import',
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

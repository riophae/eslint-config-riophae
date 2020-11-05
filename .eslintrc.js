/* eslint 'quote-props': [ 'error', 'consistent-as-needed' ] */

'use strict'

module.exports = {
  root: true,
  extends: '.',
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    node: true,
    es2021: true,
    browser: false,
  },
  rules: {
    'no-prototype-builtins': 'off',
    'quote-props': [ 'error', 'consistent' ],
  },
}

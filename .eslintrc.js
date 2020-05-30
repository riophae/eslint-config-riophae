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
    es2020: true,
    browser: false,
  },
  rules: {
    'quote-props': [ 'error', 'consistent' ],
  },
}

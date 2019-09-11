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
    './rules/import',
    './rules/vue',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'func-names': [ 'error', 'as-needed' ],
  },
  overrides: [ {
    files: [ '*.vue' ],
    rules: {
      indent: 'off', // not working well with .vue files so disable it
    },
  } ],
}

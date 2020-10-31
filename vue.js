'use strict'

module.exports = {
  extends: [
    '.',
    './rules/plugin-vue',
  ].map(require.resolve),
  parserOptions: {
    // Override `plugin:vue/base`'s setting
    ecmaVersion: 2021,
  },
  overrides: [ {
    files: [ '*.vue' ],
    rules: {
      indent: 'off', // not working well with .vue files so disable it
    },
  } ],
}

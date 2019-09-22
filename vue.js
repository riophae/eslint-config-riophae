'use strict'

module.exports = {
  extends: [
    '.',
    './rules/vue',
  ].map(require.resolve),
  overrides: [ {
    files: [ '*.vue' ],
    rules: {
      indent: 'off', // not working well with .vue files so disable it
    },
  } ],
}

'use strict'

module.exports = {
  'root': true,
  'extends': '.',
  'parserOptions': {
    'sourceType': 'script',
  },
  'env': {
    'node': true,
    'es6': true,
    'browser': false,
  },
  'rules': {
    'quote-props': [ 'error', 'consistent' ],
  },
}

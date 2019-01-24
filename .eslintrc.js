module.exports = {
  'extends': './index.js',
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'script',
  },
  'env': {
    'node': true,
    'es6': true,
    'browser': false,
  },
  'rules': {
    'quote-props': [ 'error', 'consistent' ],
    'strict': [ 'error', 'global' ],
  },
}

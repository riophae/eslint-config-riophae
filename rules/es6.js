'use strict'

module.exports = {
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': [ 'error', 'as-needed', {
      requireForBlockBody: false,
    } ],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': [ 'error', {
      before: false,
      after: true,
    } ],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [ 'error', 'always' ],
    'prefer-arrow-callback': [ 'error', {
      allowNamedFunctions: true,
      allowUnboundThis: false,
    } ],
    'prefer-const': [ 'error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    } ],
    'prefer-destructuring': [ 'error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    } ],
    'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': [ 'error', 'never' ],
    'yield-star-spacing': [ 'error', 'after' ],
  },
}

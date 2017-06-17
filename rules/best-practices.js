'use strict'

module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'consistent-return': 'off',
    'curly': 'off',
    'default-case': 'error',
    'dot-location': [ 'error', 'property' ],
    'dot-notation': 'error',
    'eqeqeq': [ 'error', 'always', {
      null: 'ignore',
    } ],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'off',
    'no-extra-label': 'off',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'off',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': [ 'error', {
      exceptions: {
        Property: false,
        VariableDeclarator: false,
        ImportDeclaration: false,
      },
    } ],
    'no-multi-str': 'error',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'off',
    'no-self-compare': 'off',
    'no-sequences': 'off',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'off',
    'no-useless-call': 'off',
    'no-useless-concat': 'off',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'off',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': [ 'error', {
      allowEmptyReject: true,
    } ],
    'radix': 'error',
    'require-await': 'error',
    'vars-on-top': 'off',
    'wrap-iife': [ 'error', 'inside' ],
    'yoda': [ 'error', 'never', {
      exceptRange: true,
    } ],
  },
}

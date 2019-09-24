'use strict'

module.exports = {
  plugins: [ 'unicorn' ],
  rules: {
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': [ 'error', {
      allowWarningComments: true,
    } ],
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    // 'unicorn/no-for-loop' => depends on ECMAScript version
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-event-key': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-flat-map': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'off',
    'unicorn/prefer-spread': 'off',
    // depends on ECMAScript version
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/regex-shorthand': 'off',
    'unicorn/throw-new-error': 'error',
  },
}
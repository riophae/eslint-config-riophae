'use strict'

module.exports = {
  plugins: [ 'unicorn' ],
  rules: {
    'unicorn/better-regex': 'error',
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
    // https://github.com/sindresorhus/meta/issues/7#issuecomment-480728114
    // https://github.com/sindresorhus/meta/issues/7#issuecomment-480595782
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-flat-map': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    // doesn't support IE
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'off',
    // String#replaceAll is by far not well supported
    'unicorn/prefer-replace-all': 'off',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'off',
    // depends on ECMAScript version
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',
  },
}

'use strict'

const recommendedRules = require('eslint-plugin-unicorn').configs.recommended.rules

module.exports = {
  plugins: [ 'unicorn' ],
  rules: {
    ...recommendedRules,
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/custom-error-definition': 'error',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    // depends on ECMAScript version
    'unicorn/no-for-loop': 'error',
    'unicorn/no-lonely-if': 'off',
    'unicorn/no-nested-ternary': 'off',
    // https://github.com/sindresorhus/meta/issues/7#issuecomment-480728114
    // https://github.com/sindresorhus/meta/issues/7#issuecomment-480595782
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    // depends on ECMAScript version
    'unicorn/prefer-array-find': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-array-flat-map': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-includes': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-math-trunc': 'error',
    // doesn't support IE
    'unicorn/prefer-number-properties': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'off',
    'unicorn/prefer-spread': 'off',
    // depends on ECMAScript version
    'unicorn/prefer-string-replace-all': 'error',
    // depends on ECMAScript version
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}

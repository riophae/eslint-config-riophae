'use strict'

module.exports = {
  rules: {
    'array-bracket-spacing': [ 'error', 'always', {
      singleValue: true,
      objectsInArrays: true,
      arraysInArrays: true,
    } ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    camelcase: [ 'error', {
      properties: 'always',
    } ],
    'capitalized-comments': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', {
      before: false,
      after: true,
    } ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this': [ 'error', 'self' ],
    'eol-last': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'func-name-matching': [ 'error', 'always' ],
    'func-names': [ 'error', 'as-needed' ], // ES6 only
    'func-style': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    indent: [ 'error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 0,
      MemberExpression: 1,
      FunctionDeclaration: {
        body: 1,
        parameters: 'first',
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
    } ],
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'key-spacing': [ 'error', {
      beforeColon: false,
      afterColon: true,
    } ],
    'keyword-spacing': [ 'error', {
      before: true,
      after: true,
    } ],
    'line-comment-position': 'off',
    'linebreak-style': [ 'error', 'unix' ],
    'lines-around-comment': 'off',
    'lines-around-directive': [ 'error', 'always' ],
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-cap': [ 'error', {
      newIsCap: true,
      capIsNew: true,
      properties: true,
    } ],
    'new-parens': 'error',
    'newline-per-chained-call': [ 'error', {
      ignoreChainWithDepth: 2,
    } ],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': [ 'error', {
      max: 2,
      maxEOF: 0,
      maxBOF: 0,
    } ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': [ 'error', {
      skipBlankLines: false,
    } ],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': [ 'error', {
      defaultAssignment: false,
    } ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': [ 'error', 'never' ],
    'padding-line-between-statements': 'off',
    'quote-props': [ 'error', 'as-needed' ],
    quotes: [ 'error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false,
    } ],
    'require-jsdoc': 'off',
    semi: [ 'error', 'never' ],
    'semi-spacing': [ 'error', {
      before: false,
      after: true,
    } ],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    } ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
    } ],
    'spaced-comment': 'off',
    'template-tag-spacing': [ 'error', 'never' ],
    'unicode-bom': [ 'error', 'never' ],
    'wrap-regex': 'off',
  },
}

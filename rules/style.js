module.exports = {
  rules: {
    'array-bracket-spacing': [ 'error', 'always', {
      singleValue: true,
      objectsInArrays: true,
      arraysInArrays: true
    } ],
    'block-spacing': 'error',
    'brace-style': [ 'error', '1tbs' ],
    camelcase: 'error',
    'capitalized-comments': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': 'error',
    'comma-style': 'error',
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
        parameters: 'first'
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1
    } ],
    'key-spacing': [ 'error', {
      beforeColon: false,
      afterColon: true
    } ],
    'keyword-spacing': [ 'error', {
      before: true,
      after: true
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
      properties: true
    } ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    quotes: [ 'error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false
    } ]
  }
}

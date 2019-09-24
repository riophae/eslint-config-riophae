'use strict'

function ruleNotFound(ruleName) {
  throw new Error(`Unknown rule: ${ruleName}`)
}

function mapRules(sourceRules, ruleNames) {
  return ruleNames.reduce((mappedRules, ruleName) => ({
    ...mappedRules,
    [`vue/${ruleName}`]: sourceRules[ruleName] || ruleNotFound(ruleName),
  }), {})
}

module.exports = {
  extends: 'plugin:vue/base',
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          ...require('./plugin-import').settings['import/resolver'].node.extensions,
          '.vue',
        ],
      },
    },
    'import/extensions': [
      ...require('./plugin-import').settings['import/extensions'],
      '.vue',
    ],
  },
  rules: {
    // These rules share the same options as their same-named core counterparts.
    // These not only avoided duplications, these also guaranteed their settings will be kept same.
    ...mapRules(require('./stylistic-issues').rules, [
      'array-bracket-spacing',
      'block-spacing',
      'brace-style',
      'camelcase',
      'comma-dangle',
      'key-spacing',
      'no-restricted-syntax',
      'object-curly-spacing',
      'space-infix-ops',
      'space-unary-ops',
    ]),
    ...mapRules(require('./best-practices').rules, [
      'eqeqeq',
    ]),
    ...mapRules(require('./ecmascript-6').rules, [
      'arrow-spacing',
    ]),
    'vue/attribute-hyphenation': [ 'error', 'always' ],
    'vue/attributes-order': 'error',
    'vue/comment-directive': 'error',
    'vue/component-name-in-template-casing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': [ 'error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    } ],
    'vue/html-end-tags': 'off',
    'vue/html-indent': [ 'error', 2, {
      attribute: 1,
      closeBracket: 1,
      alignAttributesVertically: false,
      ignores: [],
    } ],
    'vue/html-quotes': [ 'error', 'double' ],
    'vue/html-self-closing': 'error', // leave to defaults
    'vue/jsx-uses-vars': 'error',
    'vue/match-component-file-name': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': [ 'error', 'always' ],
    'vue/name-property-casing': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-boolean-default': 'off',
    'vue/no-dupe-keys': 'error', // leave to defaults
    'vue/no-duplicate-attributes': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-reserved-keys': 'error', // leave to defaults
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-key': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-v-html': 'error',
    'vue/order-in-components': 'error',
    'vue/prop-name-casing': [ 'error', 'camelCase' ],
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': [ 'error', {
      treatUndefinedAsUnspecified: true,
    } ],
    'vue/script-indent': [ 'error', 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: [],
    } ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/this-in-template': [ 'error', 'never' ],
    'vue/use-v-on-exact': 'error',
    'vue/v-bind-style': [ 'error', 'shorthand' ],
    'vue/v-on-function-call': 'off',
    'vue/v-on-style': [ 'error', 'shorthand' ],
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-text': 'error',
  },
}

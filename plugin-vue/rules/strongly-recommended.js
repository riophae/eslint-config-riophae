'use strict'

const shared = {
  'vue/component-definition-name-casing': [ 'error', 'kebab-case' ],
  'vue/html-closing-bracket-newline': 'off',
  'vue/html-end-tags': 'off',
  'vue/html-indent': [ 'error', 2, {
    attribute: 1,
    closeBracket: 1,
    alignAttributesVertically: false,
    ignores: [],
  } ],
  'vue/max-attributes-per-line': 'off',
  'vue/singleline-html-element-content-newline': 'off',
}

const v3 = {
  ...shared,
}

const v2 = {
  ...shared,
}

module.exports = { v3, v2 }

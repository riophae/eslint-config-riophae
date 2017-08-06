'use strict'

module.exports = {
  extends: [ 'plugin:vue/base' ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.json', '.vue' ],
      },
    },
    'import/extensions': [ '.js', '.json', '.vue' ],
  },
  rules: {
    'import/no-anonymous-default-export': 'off',
    'no-multiple-empty-lines': 'off', // doesn't work well with `.vue` files so disable it
    'vue/attribute-hyphenation': [ 'error', 'always' ],
    'vue/html-end-tags': 'off',
    'vue/html-quotes': [ 'error', 'double' ],
    'vue/jsx-uses-vars': 'error',
    'vue/name-property-casing': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-dupe-keys': 'error', // leave options to default
    'vue/no-duplicate-attributes': 'error',
    'vue/no-invalid-template-root': 'error',
    'vue/no-invalid-v-bind': 'error',
    'vue/no-invalid-v-cloak': 'error',
    'vue/no-invalid-v-else-if': 'error',
    'vue/no-invalid-v-else': 'error',
    'vue/no-invalid-v-for': 'error',
    'vue/no-invalid-v-html': 'error',
    'vue/no-invalid-v-if': 'error',
    'vue/no-invalid-v-model': 'error',
    'vue/no-invalid-v-on': 'error',
    'vue/no-invalid-v-once': 'error',
    'vue/no-invalid-v-pre': 'error',
    'vue/no-invalid-v-show': 'error',
    'vue/no-invalid-v-text': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-reservered-keys': 'error', // leave options to default
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/order-in-components': 'error',
    'vue/require-component-is': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/return-in-computed-property': [ 'error', {
      treatUndefinedAsUnspecified: true,
    } ],
    'vue/v-bind-style': [ 'error', 'shorthand' ],
    'vue/v-on-style': [ 'error', 'shorthand' ],
  },
}

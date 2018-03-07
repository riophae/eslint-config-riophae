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
    'vue/html-self-closing': 'error', // use the default settings
    'vue/jsx-uses-vars': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/mustache-interpolation-spacing': [ 'error', 'always' ],
    'vue/name-property-casing': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-dupe-keys': 'error', // leave options to default
    'vue/no-duplicate-attributes': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-reserved-keys': 'error', // leave options to default
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/order-in-components': 'error',
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': [ 'error', {
      treatUndefinedAsUnspecified: true,
    } ],
    'vue/this-in-template': [ 'error', 'never' ],
    'vue/v-bind-style': [ 'error', 'shorthand' ],
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

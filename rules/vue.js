'use strict'

module.exports = {
  plugins: [ 'vue' ],
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
    'vue/html-end-tags': 'off',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/order-in-components': 'error',
    'vue/require-component-is': 'error',
    'vue/require-v-for-key': 'error',
    'vue/html-quotes': [ 'error', 'double' ],
    'vue/v-bind-style': [ 'error', 'shorthand' ],
    'vue/v-on-style': [ 'error', 'shorthand' ],
    'vue/jsx-uses-vars': 'error',
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
  },
}

'use strict'

module.exports = {
  extends: [
    '.',
    './rules/plugin-vue/v3',
  ].map(require.resolve),
}

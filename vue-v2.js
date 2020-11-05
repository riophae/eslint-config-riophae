'use strict'

module.exports = {
  extends: [
    '.',
    './rules/plugin-vue/v2',
  ].map(require.resolve),
}

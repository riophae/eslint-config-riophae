'use strict'

module.exports = {
  extends: [
    '.',
    './plugin-vue/v3',
  ].map(require.resolve),
}

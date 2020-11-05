'use strict'

module.exports = {
  extends: [
    '.',
    './plugin-vue/v2',
  ].map(require.resolve),
}

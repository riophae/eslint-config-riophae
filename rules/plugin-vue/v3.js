'use strict'

const baseConfig = require('./base')
const { overrideVueRules } = require('./utils')

module.exports = {
  ...baseConfig,
  rules: {
    ...overrideVueRules('base', 'error', require('./rules/base')),
    ...overrideVueRules('vue3-essential', 'error', require('./rules/essential').v3),
    ...overrideVueRules('vue3-strongly-recommended', 'warn', require('./rules/strongly-recommended').v3),
    ...overrideVueRules('vue3-recommended', 'warn', require('./rules/recommended').v3),
    ...require('./rules/uncategorized'),
    ...require('./rules/extension'),
  },
}

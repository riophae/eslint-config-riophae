'use strict'

const baseConfig = require('./base')
const { overrideVueRules } = require('./utils')

module.exports = {
  ...baseConfig,
  rules: {
    ...overrideVueRules('base', 'error', require('./rules/base')),
    ...overrideVueRules('essential', 'error', require('./rules/essential').v2),
    ...overrideVueRules('strongly-recommended', 'warn', require('./rules/strongly-recommended').v2),
    ...overrideVueRules('recommended', 'warn', require('./rules/recommended').v2),
    ...require('./rules/uncategorized'),
    ...require('./rules/extension'),
  },
}

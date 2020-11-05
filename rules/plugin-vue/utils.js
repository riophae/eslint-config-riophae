'use strict'

const assert = require('assert')
const deepmerge = require('deepmerge')

function mergeSettings(sourceFile, settingName, additionalSettings) {
  const sourceSettings = require('../' + sourceFile).settings[settingName]

  if (!sourceSettings) {
    throw new Error(`Unknown setting: ${settingName}`)
  }

  const mergedSettings = {
    [settingName]: deepmerge(sourceSettings, additionalSettings),
  }

  return mergedSettings
}

function overrideVueRules(sourceFile, expectedSourceRuleOption, overridingRules) {
  const sourceRules = require('eslint-plugin-vue/lib/configs/' + sourceFile).rules
  const combinedRules = {}

  for (const ruleName of Object.keys(overridingRules)) {
    if (!sourceRules.hasOwnProperty(ruleName)) {
      throw new Error(`Unknown rule: ${ruleName}`)
    }
  }

  for (const ruleName of Object.keys(sourceRules)) {
    const originalRuleOption = sourceRules[ruleName]
    assert.equal(originalRuleOption, expectedSourceRuleOption)

    combinedRules[ruleName] = overridingRules.hasOwnProperty(ruleName)
      ? overridingRules[ruleName]
      // The recommended rules of eslint-plugin-vue are set to "warn".
      // We change those to "error".
      : 'error'
  }

  return combinedRules
}

// Some eslint-plugin-vue rules share the same option items as their same-named core counterparts.
// Not only did these avoid duplications, but also guaranteed their options would be kept the same.
function mapCoreRules(sourceFile, ruleNames) {
  const sourceRules = require('../' + sourceFile).rules
  const mappedRules = {}

  for (const ruleName of ruleNames) {
    if (!sourceRules.hasOwnProperty(ruleName)) {
      throw new Error(`Unknown rule: ${ruleName}`)
    }

    mappedRules[`vue/${ruleName}`] = sourceRules[ruleName]
  }

  return mappedRules
}

module.exports = {
  mergeSettings,
  overrideVueRules,
  mapCoreRules,
}

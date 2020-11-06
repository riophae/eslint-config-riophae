/* eslint-disable import/newline-after-import */

'use strict'

const assert = require('assert')
const _ = require('lodash')
const cli = require('eslint-find-rules/src/lib/cli-util')

function loadRules(file) {
  return require(file).rules
}

function loadRuleNames(file) {
  return Object.keys(loadRules(file))
}

function getVueRule(ruleName) {
  const unprefixedRuleName = ruleName.replace(/^vue\//, '')
  const vueRule = allVueRules[unprefixedRuleName]

  if (!vueRule) {
    throw new Error(`Unknown rule: ${ruleName}`)
  }

  return vueRule
}

function pickRuleNamesForVueVersion(expectedCategories) {
  return allVueRuleNames.filter(ruleName => {
    const vueRule = getVueRule(ruleName)
    const { deprecated } = vueRule.meta
    const { categories } = vueRule.meta.docs

    if (deprecated) {
      return false
    }

    if (categories == null) {
      return true
    }

    assert(Array.isArray(categories))
    assert(categories.every(category => allCategories.includes(category)))

    if (expectedCategories.some(category => categories.includes(category))) {
      return true
    }

    return false
  })
}

function findDeprecatedRuleNames(ruleNames) {
  return ruleNames.filter(ruleName => {
    const vueRule = getVueRule(ruleName)
    const { deprecated } = vueRule.meta

    return deprecated
  })
}

function findUnusedRuleNames(allRuleNames, usedRuleNames) {
  const unusedRuleNames = _.difference(allRuleNames, usedRuleNames)

  return unusedRuleNames
}

function processResult(sectionTitle, ruleNames) {
  if (ruleNames.length) {
    hasIssues = true

    if (++sectionCount > 1) {
      cli.push('\n')
    }

    cli.push(sectionTitle + '\n')
    cli.push(ruleNames)
  }
}

const allVueRules = loadRules('eslint-plugin-vue')
const allVueRuleNames = loadRuleNames('eslint-plugin-vue').map(ruleName => 'vue/' + ruleName)

const vue3Categories = [ 'base', 'vue3-essential', 'vue3-strongly-recommended', 'vue3-recommended' ]
const vue2Categories = [ 'base', 'essential', 'strongly-recommended', 'recommended' ]
const allCategories = _.union(vue3Categories, vue2Categories)

const allVue3RuleNames = pickRuleNamesForVueVersion(vue3Categories)
const allVue2RuleNames = pickRuleNamesForVueVersion(vue2Categories)

const usedVue3RuleNames = loadRuleNames('../plugin-vue/v3')
const usedVue2RuleNames = loadRuleNames('../plugin-vue/v2')
const usedDeprecatedRuleNames = _.union(
  findDeprecatedRuleNames(usedVue3RuleNames),
  findDeprecatedRuleNames(usedVue2RuleNames),
)

const unusedVue3RuleNames = findUnusedRuleNames(allVue3RuleNames, usedVue3RuleNames)
const unusedVue2RuleNames = findUnusedRuleNames(allVue2RuleNames, usedVue2RuleNames)

let hasIssues = false
let sectionCount = 0

processResult('Unused Vue 3 rules', unusedVue3RuleNames)
processResult('Unused Vue 2 rules', unusedVue2RuleNames)
processResult('Deprecated Vue rules', usedDeprecatedRuleNames)

if (hasIssues) {
  cli.write()
  process.exitCode = 1
}

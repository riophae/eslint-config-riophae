'use strict'

const { mapCoreRules } = require('../utils')

module.exports = {
  ...mapCoreRules('stylistic-issues', [
    'array-bracket-newline',
    'array-bracket-spacing',
  ]),
  ...mapCoreRules('ecmascript-6', [
    'arrow-spacing',
  ]),
  ...mapCoreRules('stylistic-issues', [
    'block-spacing',
    'brace-style',
    'camelcase',
    'comma-dangle',
    'comma-spacing',
    'comma-style',
  ]),
  ...mapCoreRules('best-practices', [
    'dot-location',
    'dot-notation',
    'eqeqeq',
  ]),
  ...mapCoreRules('stylistic-issues', [
    'func-call-spacing',
    'key-spacing',
    'keyword-spacing',
  ]),
  'vue/max-len': 'off',
  ...mapCoreRules('possible-errors', [
    'no-constant-condition',
  ]),
  ...mapCoreRules('best-practices', [
    'no-empty-pattern',
  ]),
  ...mapCoreRules('possible-errors', [
    'no-extra-parens',
  ]),
  'vue/no-irregular-whitespace': 'error',
  ...mapCoreRules('stylistic-issues', [
    'no-restricted-syntax',
  ]),
  ...mapCoreRules('possible-errors', [
    'no-sparse-arrays',
  ]),
  ...mapCoreRules('best-practices', [
    'no-useless-concat',
  ]),
  ...mapCoreRules('stylistic-issues', [
    'object-curly-newline',
    'object-curly-spacing',
    'object-property-newline',
    'operator-linebreak',
  ]),
  ...mapCoreRules('ecmascript-6', [
    'prefer-template',
  ]),
  ...mapCoreRules('stylistic-issues', [
    'space-in-parens',
    'space-infix-ops',
    'space-unary-ops',
  ]),
  ...mapCoreRules('ecmascript-6', [
    'template-curly-spacing',
  ]),
}

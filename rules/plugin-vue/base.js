'use strict'

const assert = require('assert')
const sourceBaseConfig = require('eslint-plugin-vue/lib/configs/base')
const deepmerge = require('deepmerge')
const omit = require('just-omit')
const intersector = require('intersector')
const { mergeSettings } = require('./utils')

// We don't want to configure rules here but in dedicated files.
const preprocessedBaseConfig = deepmerge(omit(sourceBaseConfig, [ 'rules' ]), {
  parserOptions: {
    ecmaVersion: 2021,
  },
})

const additionalBaseConfig = {
  settings: {
    ...mergeSettings('plugin-import', 'import/resolver', {
      node: {
        extensions: [ '.vue' ],
      },
    }),
    ...mergeSettings('plugin-import', 'import/extensions', [ '.vue' ]),
  },
  overrides: [ {
    files: [ '*.vue' ],
    rules: {
      // Not playing well with .vue files; Disable it.
      indent: 'off',
    },
  } ],
}

// Make sure there is no overlappings between the two.
// We don't want them accidently override each other.
const primitiveIntersect = intersector()
const intersection = primitiveIntersect(
  Object.keys(preprocessedBaseConfig),
  Object.keys(additionalBaseConfig),
)
assert.deepEqual(intersection, [])

// These will be the base config for both Vue v3 & v2.
module.exports = {
  ...preprocessedBaseConfig,
  ...additionalBaseConfig,
}

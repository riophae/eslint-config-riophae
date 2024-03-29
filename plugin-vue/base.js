'use strict'

const assert = require('assert')
const sourceBaseConfig = require('eslint-plugin-vue/lib/configs/base')
const deepmerge = require('deepmerge')
const omit = require('just-omit')
const { ecmaVersion } = require('..').parserOptions
const { extendSettings, checkOverlappings } = require('./utils')

assert(Number.isInteger(ecmaVersion))

// We don't want to configure rules here but in dedicated files.
const preprocessedBaseConfig = deepmerge(omit(sourceBaseConfig, [ 'rules' ]), {
  parserOptions: {
    ecmaVersion,
  },
})

const additionalBaseConfig = {
  settings: {
    ...extendSettings('plugin-import', 'import/resolver', {
      node: {
        extensions: [ '.vue' ],
      },
    }),
    ...extendSettings('plugin-import', 'import/extensions', [ '.vue' ]),
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
checkOverlappings(preprocessedBaseConfig, additionalBaseConfig)

// These will be the base config for both Vue v3 & v2.
module.exports = {
  ...preprocessedBaseConfig,
  ...additionalBaseConfig,
}

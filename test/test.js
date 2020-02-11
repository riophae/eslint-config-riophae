const test = require('ava')
const eslint = require('eslint')
const isPlainObj = require('is-plain-obj')
const tempWrite = require('temp-write')

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId)

function runEslint(string, config) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(config)),
  })

  return linter.executeOnText(string).results[0].messages
}

test('deps', t => {
  const pkgJson = require('../package')

  Object.keys(pkgJson.peerDependencies).forEach(key => {
    t.true(
      pkgJson.devDependencies[key] === pkgJson.peerDependencies[key],
      'peer dependnecies should share the same versions as dev dependencies',
    )
  })
})

test('main', t => {
  const configs = [
    require('..'),
    require('../legacy'),
    require('../vue'),
  ]

  configs.forEach(config => {
    t.true(isPlainObj(config))

    const errors = runEslint('\'use strict\'\nconsole.log("unicorn")\n', config)
    t.true(hasRule(errors, 'quotes'))
  })
})

const test = require('ava')
const eslint = require('eslint')

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId)

function runEslint(code, config) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: config,
  })

  return linter.executeOnText(code).results[0].messages
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
    '..',
    '../legacy',
    '../vue',
  ].map(require.resolve)

  configs.forEach(config => {
    const errors = runEslint('\'use strict\'\nconsole.log("test")\n', config)

    t.true(hasRule(errors, 'quotes'))
  })
})

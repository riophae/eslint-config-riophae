import test from 'ava'
import eslint from 'eslint'
import isPlainObj from 'is-plain-obj'
import tempWrite from 'temp-write'

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId)

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf)),
  })

  return linter.executeOnText(str).results[0].messages
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
  const conf = require('../')

  t.true(isPlainObj(conf))

  const errors = runEslint('\'use strict\'\nconsole.log("unicorn")\n', conf)
  t.true(hasRule(errors, 'quotes'))
})

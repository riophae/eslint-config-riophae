const test = require('ava')
const { ESLint } = require('eslint')

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId)

async function runEslint(code, config) {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: config,
  })

  const lintResults = await eslint.lintText(code)

  return lintResults[0].messages
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

test('main', async t => {
  const configs = [
    '..',
    '../legacy',
    '../vue-v3',
    '../vue-v2',
  ].map(require.resolve)

  for (const config of configs) {
    const errors = await runEslint('\'use strict\'\nconsole.log("test")\n', config)

    t.true(hasRule(errors, 'quotes'))
  }
})

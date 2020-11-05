# eslint-config-riophae [![npm](https://badgen.now.sh/npm/v/eslint-config-riophae)](https://www.npmjs.com/package/eslint-config-riophae) [![Build](https://badgen.now.sh/travis/riophae/eslint-config-riophae)](https://travis-ci.org/riophae/eslint-config-riophae) [![Known vulnerabilities](https://snyk.io/test/npm/eslint-config-riophae/badge.svg)](https://snyk.io/test/npm/eslint-config-riophae)

The customized ESLint shareable configs for the development of my open-source projects.

## Usage

1. `npm install --save-dev eslint eslint-plugin-node eslint-plugin-unicorn eslint-plugin-import eslint-config-riophae`
2. Choose one from these four presets and add it to `extends`:

    - `riophae` for linting ES6+
    - `riophae/legacy` for linting ES5
    - `riophae/vue-v3` or `riophae/vue-v2` for linting ES6+ & .vue files (one more dependency required: `eslint-plugin-vue`)

3. Add the preset to your ESLint config file:

```js
{
  "extends": [ "riophae" ],
  "rules": {
    // override if necessary
  }
}
```

## License

MIT

# eslint-config-riophae [![npm Version](https://badge.fury.io/js/eslint-config-riophae.svg)](http://badge.fury.io/js/eslint-config-riophae) [![Build Status](https://travis-ci.org/riophae/eslint-config-riophae.svg?branch=master)](https://travis-ci.org/riophae/eslint-config-riophae)

The customized ESLint config for the development of my open-source projects.

## Usage

1. `npm install --save-dev eslint eslint-plugin-import eslint-config-riophae`
2. Choose one from three available presets:
  - `riophae` - for linting ES6+
  - `riophae/legacy` - for linting ES5
  - `riophae/vue` - for linting ES6+ & .vue files (one more dependency required: `eslint-plugin-vue`)
3. Add the preset to your ESLint config file:

```js
{
  "extends": [ "riophae" ], // also could be "riophae/legacy" or "riophae/vue"
  "rules": {
    // override if necessary
  }
}
```

## License

MIT

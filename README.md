# eslint-config-riophae [![npm Version](https://badge.fury.io/js/eslint-config-riophae.svg)](http://badge.fury.io/js/eslint-config-riophae) [![Build Status](https://travis-ci.org/riophae/eslint-config-riophae.svg?branch=master)](https://travis-ci.org/riophae/eslint-config-riophae)

The customized ESLint config for the development of my open-source projects.

## Usage

1. `npm install --save-dev eslint-config-riophae`
2. Add the preset to your ESLint config:

```js
{
  "extends": [ "riophae" ],
  "rules": {
    // override if necessary
  }
}
```

An alternative preset is also provided if you are coding in ES5:

```js
{
  "extends": [ "riophae/legacy" ],
  "rules": {
    // override if necessary
  }
}
```

## License

MIT

# eslint-config-riophae [![npm](https://badgen.now.sh/npm/v/eslint-config-riophae)](https://www.npmjs.com/package/eslint-config-riophae) [![Build](https://badgen.now.sh/travis/riophae/eslint-config-riophae)](https://travis-ci.org/riophae/eslint-config-riophae) [![Known vulnerabilities](https://snyk.io/test/npm/eslint-config-riophae/badge.svg)](https://snyk.io/test/npm/eslint-config-riophae)

The customized ESLint shareable configs for the development of my open-source projects.

## Usage

First, install this package and its peer dependencies. The command to run is depending on your npm version.

<table>
  <thead>
    <tr>
      <th width="120">npm Version</th>
      <th>Command</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>v7</code> or later</td>
      <td><code>npm install --save-dev eslint-config-riophae</code></td>
      <td>npm will automatically install peer deps for you.</td>
    </tr>
    <tr>
      <td>prior to <code>v6</code></td>
      <td><code>npm install --save-dev eslint eslint-plugin-node eslint-plugin-unicorn eslint-plugin-import eslint-config-riophae</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

Secondly, choose a preset from the following:

<table>
  <tr>
    <th>Preset Name</th>
    <th>Description</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td><code>riophae</code></td>
    <td>For linting ES6+.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>riophae/vue-v3</code> for Vue 3</td>
    <td rowspan="2">For linting ES6+ & <code>.vue</code> files.</td>
    <td rowspan="2">Install one more dependency: <br><code>eslint-plugin-vue</code></td>
  </tr>
  <tr>
    <td><code>riophae/vue-v2</code> for Vue 2</td>
  </tr>
  <tr>
    <td><code>riophae/legacy</code></td>
    <td>For linting ES5.</td>
    <td></td>
  </tr>
</table>

Thirdly and lastly, add the preset you just chose to your ESLint config file in the `extends` field:

```js
{
  "extends": [ "riophae" ],
  "rules": {
    // override if necessary
  }
}
```

## License

MIT © [Riophae Lee](https://github.com/riophae)

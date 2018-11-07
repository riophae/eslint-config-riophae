'use strict'

module.exports = {
  plugins: [ 'import' ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.ts', '.json' ],
      },
    },
    'import/extensions': [ '.js', '.ts', '.json' ],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    'import/default': 'off',
    'import/dynamic-import-chunkname': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': [ 'error', {
      allowComputed: true,
    } ],
    'import/newline-after-import': [ 'error', {
      count: 1,
    } ],
    'import/no-absolute-path': 'error',
    'import/no-amd': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'off',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: false,
    } ],
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': [ 'error', {
      commonjs: true,
      caseSensitive: true,
    } ],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'off',
    'import/order': 'error',
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'off',
  },
}

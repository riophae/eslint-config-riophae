'use strict'

const recommendedRules = require('eslint-plugin-node/lib/configs/_commons').commonRules

if (recommendedRules['no-process-exit']) {
  recommendedRules['node/no-process-exit'] = recommendedRules['no-process-exit']
  delete recommendedRules['no-process-exit']
}

module.exports = {
  plugins: [ 'node' ],
  rules: {
    ...recommendedRules,
    'node/callback-return': 'off',
    'node/exports-style': 'off',
    'node/file-extension-in-import': 'off',
    'node/global-require': 'off',
    'node/handle-callback-err': 'error',
    'node/no-callback-literal': 'error',
    // see import/no-extraneous-dependencies
    'node/no-extraneous-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-mixed-requires': [ 'error', {
      grouping: true,
      allowCall: true,
    } ],
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-env': 'off',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',
    'node/no-sync': 'off',
    'node/no-unpublished-bin': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unsupported-features/node-builtins': 'off',
    'node/prefer-global/buffer': 'error',
    'node/prefer-global/console': 'error',
    'node/prefer-global/process': 'error',
    'node/prefer-global/text-decoder': 'error',
    'node/prefer-global/text-encoder': 'error',
    'node/prefer-global/url': 'error',
    'node/prefer-global/url-search-params': 'error',
    'node/prefer-promises/dns': 'off',
    'node/prefer-promises/fs': 'off',
  },
}

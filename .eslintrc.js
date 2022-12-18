// eslint-disable-next-line import/no-extraneous-dependencies
const alias = require('alias-hq');

const eslintImportAlias = require('./alias/eslint-import');

module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: alias.get(eslintImportAlias),
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:@next/next/recommended',
    'plugin:ssr-friendly/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'ssr-friendly'],
  rules: {
    'no-const-assign': 'error',
    /** Restrict imports from devDependencies since they are not included in library build. peerDependencies are ok */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        peerDependencies: true,
      },
    ],
    /**
     * Enforce import order with empty lines between import group
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'error',
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
  overrides: [],
};

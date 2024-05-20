module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'unknown'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'common',
            group: 'internal',
          },
          {
            pattern: 'routes/ **',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};

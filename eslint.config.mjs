import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import vitestGlobals from "eslint-plugin-vitest-globals";

export default [
  {
    ignores: ["**/dist", "**/.eslintrc.cjs", "**/eslint.config.mjs", "**/vite.config.js"],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...vitestGlobals.environments.env.globals,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'max-len': [1, 120, 2, { 'ignoreComments': true }],
      'no-console': 'off',
      quotes: ['error', 'single', {
        allowTemplateLiterals: true,
        avoidEscape: true,
      }],
      'camelcase': ['error', { 'properties': 'always' }],
      'semi': ['warn', 'always'],
      'comma-dangle': ['warn', 'only-multiline'],
      'dot-notation': 'warn',
      'space-before-function-paren': 'off',
      'indent': ['warn', 2],
      'padded-blocks': 'warn',
      'no-trailing-spaces': 'warn',
      'array-bracket-spacing': 'warn',
      'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
      'padded-blocks': ['error', 'never'],
      'no-var': 'error',
    },
  },
]

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
    'vue/multi-word-component-names': ['off'],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/no-empty-component-block': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-v-for-template-key': 'off',
    'vue/v-on-function-call': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/no-undef-properties': 'error',
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
  },
}

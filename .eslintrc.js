module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:import/recommended',
    'standard',
    'eslint:recommended',
  ],
  overrides: [],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [ 'vue' ],
  rules: {
    // vue lint settings
    'vue/max-attributes-per-line': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-definition-name-casing': [ 'error', 'PascalCase' ],
    'vue/no-unused-components': [ 'warn' ],
    'vue/prefer-separate-static-class': 'error',
    'vue/eqeqeq': [ 'error', 'smart' ],
    'vue/padding-line-between-blocks': [ 'error', 'always' ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/html-comment-content-spacing': [ 'error', 'always', {
      exceptions: [ '-' ],
    }],
    'vue/component-tags-order': [ 'error', {
      order: [ 'script', 'template', 'style' ],
    }],
    'vue/comma-dangle': [ 'error', 'always-multiline' ],
    'vue/comma-spacing': [ 'error', { before: false, after: true }],
    'vue/comma-style': [ 'error', 'last' ],
    // js lint settings
    'array-element-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 2, 'always', { objectsInArrays: false }],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/newline-after-import': [ 'error', { count: 1, considerComments: true }],
  },
}

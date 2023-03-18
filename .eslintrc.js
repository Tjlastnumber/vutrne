module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [ 'plugin:vue/recommended', 'standard', 'eslint:recommended' ],
  overrides: [],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [ 'vue' ],
  rules: {
    // vue lint settings
    'vue/component-definition-name-casing': [ 'error', 'PascalCase' ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    // js lint settings
    'array-element-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 2, 'always' ]
  }
}

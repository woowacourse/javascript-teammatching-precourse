module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint-config-tui', 'plugin:prettier/recommended'],
  rules: {
    semi: 2,
    'padding-line-between-statements': 0,
    'newline-before-return': 0,
    'no-new': 0
  }
};

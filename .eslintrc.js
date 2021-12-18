module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'no-alert': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'max-depth': ['error', 2],
    'class-methods-use-this': 'off',
    'max-lines-per-function': ['error', 17],
    'no-param-reassign': 'off',
    'no-constructor-return': 'off',
    'default-param-last': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['prettier'],
};

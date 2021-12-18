module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  rules: {
    'import/extensions': 'off',
    'linebreak-style': 0,
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
  },
};

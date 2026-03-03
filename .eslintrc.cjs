module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/extensions': 'off',
  },
};

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'spaced-comment': 'off',
    'arrow-parens': 'off',
    'no-restricted-syntax': 'off',
  },
};

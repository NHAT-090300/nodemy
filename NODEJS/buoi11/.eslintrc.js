module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'linebreak-style': 0,
    'indent': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'no-tabs': 0,
    'dot-notation': 0,
    'default-case': 0,
    'getter-return': 0
  }
}

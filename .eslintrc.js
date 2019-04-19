module.exports = {
  env: {
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: false
  },
  extends: 'standard',
  rules: {
    'space-before-function-paren': ['error', 'never']
  }
}

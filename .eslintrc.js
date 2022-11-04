module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `./tsconfig.json`
  },
  rules: {
  }
}

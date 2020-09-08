module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    'standard',
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:wc/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    "wc"
  ],
  settings: {
    wc: {
      elementBaseClasses: ["BaseElemenent", "LitElement"]
    }
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "space-before-function-paren": ["warn", "never"],

    "quotes": ["error", "single", { "avoidEscape": true }],
    "no-var": "error"
  }
}

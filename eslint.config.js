// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  eslint.configs.all,
  ...tseslint.configs.recommended,
  {
    rules: {
      "max-lines-per-function": ["error", { "max": 100 }],
      "one-var": "off",
      "max-statements": "off",
      "consistent-return": "off",
      "no-undefined": "off",
      "no-plusplus": "off",
      "no-magic-numbers": "off",
      "no-console": "off",
    }
  }
);

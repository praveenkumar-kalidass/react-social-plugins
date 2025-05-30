// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const storybook = require('eslint-plugin-storybook');

module.exports = tseslint.config(
  eslint.configs.all,
  ...tseslint.configs.recommended,
  {
    plugins: {
      storybook,
    },
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

const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    // Entry for 'all files'
    files: ["**/*.{js,jsx,ts,tsx}"],

    extends: [
      // ESLint recommended rules
      eslint.configs.recommended,

      // typescript-eslint recommended rules
      ...tseslint.configs.recommended,
    ],

    rules: {
      "sort-imports": [
        "warn",
        {
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
    },
  },

  {
    // Entry for TypeScript files
    files: ["**/*.{ts,tsx}"],
    extends: [
      // typescript-eslint recommended rules requiring type checking
      ...tseslint.configs.recommendedTypeChecked,
    ],

    rules: {
      // Enforce specifying a return type for functions,
      // but allow implicit for expressions
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
        },
      ],

      // These floating promises seem to be commonly used and accepted in React projects.
      "@typescript-eslint/no-floating-promises": "off",

      // Not really an issue with most React projects
      "@typescript-eslint/unbound-method": "off",

      // Disabling rules which add complication when handling 3rd party "any" types
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",

      // Allow use of promises where void return is expected (e.g. setTimeout(asyncFunction, 100))
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
    },
  },

  // Disable stylistic rules conflicting with Prettier
  eslintConfigPrettier
);

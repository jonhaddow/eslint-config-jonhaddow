module.exports = {
  extends: [
    "eslint:recommended",

    // TypeScript specific recommended rules
    "plugin:@typescript-eslint/recommended",

    // Prettier config to disable stylistic rules
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
  overrides: [
    {
      // Configuration for typescript files only
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
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
  ],
};

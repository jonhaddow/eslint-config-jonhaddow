const tseslint = require("typescript-eslint");
const globals = require("globals");
const reactPlugin = require("eslint-plugin-react");
const hooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = tseslint.config({
  // Entry for 'all files' (that we care about)
  files: ["**/*.{js,jsx,ts,tsx}"],

  // React plugin
  ...reactPlugin.configs.flat.all,

  // React hooks plugin
  ...hooksPlugin.configs.recommended,

  // JSX a11y plugin
  ...jsxA11y.flatConfigs.recommended,

  rules: {
    // Disabling rule as prop type can be inferred from the
    // type parameter provided in TypeScript
    "react/prop-types": "off",
  },

  languageOptions: {
    ...reactPlugin.configs.flat.all.languageOptions,
    ...jsxA11y.flatConfigs.recommended.languageOptions,

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },
});

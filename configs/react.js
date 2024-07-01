const tseslint = require("typescript-eslint");
const globals = require("globals");
const hooksPlugin = require("eslint-plugin-react-hooks");
const reactJSXRuntime = require("eslint-plugin-react/configs/jsx-runtime.js");
const reactRecommended = require("eslint-plugin-react/configs/recommended.js");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = tseslint.config(
  jsxA11y.flatConfigs.recommended,

  {
    // Entry for 'all files' (that we care about)
    files: ["**/*.{js,jsx,ts,tsx}"],

    extends: [
      // eslint-plugin-react recommended rules
      reactRecommended,
      reactJSXRuntime,
    ],

    plugins: {
      // eslint-plugin-react-hooks plugin
      "react-hooks": hooksPlugin,
    },

    rules: {
      ...hooksPlugin.configs.recommended.rules,

      // Disabling rule as prop type can be inferred from the
      // type parameter provided in TypeScript
      "react/prop-types": "off",
    },

    languageOptions: {
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
  },
);

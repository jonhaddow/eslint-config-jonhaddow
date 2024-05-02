const tseslint = require("typescript-eslint");
const globals = require("globals");
const { FlatCompat } = require("@eslint/eslintrc");
const hooksPlugin = require("eslint-plugin-react-hooks");
const reactJSXRuntime = require("eslint-plugin-react/configs/jsx-runtime.js");
const reactRecommended = require("eslint-plugin-react/configs/recommended.js");

const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

module.exports = tseslint.config(
  ...compat.extends("plugin:jsx-a11y/recommended"),

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
  }
);

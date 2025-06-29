const tseslint = require("typescript-eslint");
const reactPlugin = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = tseslint.config({
  // Entry for 'all files' (that we care about)
  files: ["**/*.{js,jsx,ts,tsx}"],

  extends: [
    // React plugin
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],

    // React hooks plugin
    reactHooks.configs["recommended-latest"],

    // JSX a11y plugin
    jsxA11y.flatConfigs.strict,
  ],

  rules: {
    // Disabling rule as prop type can be inferred from the
    // type parameter provided in TypeScript
    "react/prop-types": "off",

    "react/jsx-curly-brace-presence": "error",
  },

  settings: {
    react: {
      version: "detect",
    },
  },
});

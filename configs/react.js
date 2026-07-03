import { fixupConfigRules } from "@eslint/compat";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config({
  // Entry for 'all files' (that we care about)
  files: ["**/*.{js,jsx,ts,tsx}"],

  extends: [
    // React plugin
    ...fixupConfigRules(reactPlugin.configs.flat.recommended),
    ...fixupConfigRules(reactPlugin.configs.flat["jsx-runtime"]),

    // React hooks plugin
    reactHooks.configs.flat["recommended-latest"],

    // JSX a11y plugin
    ...fixupConfigRules(jsxA11y.flatConfigs.strict),
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

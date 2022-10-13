module.exports = {
  extends: [
    // React specific recommended rules
    "plugin:react/recommended",

    // Recommended accessibility rules for JSX
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jsx-a11y", "react", "react-hooks"],
  rules: {
    // Hook specific rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Disabling rule as prop type can be inferred from the
    // type parameter provided in TypeScript
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

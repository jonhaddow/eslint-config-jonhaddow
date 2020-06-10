module.exports = {
	extends: [
		// React specific recommended rules
		"plugin:react/recommended",

		// Recommended accessibility rules for JSX
		"plugin:jsx-a11y/recommended",

		// Best practices for testing with Jest and Testing Library
		"plugin:testing-library/react",
		"plugin:jest/recommended",
		"plugin:jest-dom/recommended",

		// Prettier config to disable stylistic rules
		"prettier/react",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	plugins: [
		"jsx-a11y",
		"react",
		"react-hooks",
		"plugin:testing-library/react",
		"plugin:jest/recommended",
		"plugin:jest-dom/recommended",
	],
	rules: {
		// Hook specific rules
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};

module.exports = {
	extends: [
		// TypeScript specific recommended rules
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		// Prettier config to disable stylistic rules
		"prettier/@typescript-eslint",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",

		// The include property on this file is used to determine
		// the files to lint.
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint"],
	rules: {
		// Enforce specifying a return type for functions,
		// but allow implicit for expressions
		"@typescript-eslint/explicit-function-return-type": [
			"warn",
			{
				allowExpressions: true,
			},
		],

		// Disabling rule as prop type can be inferred from the
		// type parameter provided in TypeScript
		"react/prop-types": "off",

		// Prevent warnings for functions defined at the bottom of a file.
		"@typescript-eslint/no-use-before-define": [
			"warn",
			{ functions: false, classes: true },
		],
	},
};

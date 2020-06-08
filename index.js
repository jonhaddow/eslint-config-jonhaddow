module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"eslint:recommended",

		// Prettier config to disable stylistic rules
		"prettier",
	],
	plugins: ["prettier"],
};

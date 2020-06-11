module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",

		// Prettier config to disable stylistic rules
		"prettier",
	],
};

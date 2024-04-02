module.exports = {
	env: {
		es2022: true,
		node: true,
		browser: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"prettier",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/prop-types": "off"
	},
	settings: {
		react: {
			version: "detect",
		},
	},
}

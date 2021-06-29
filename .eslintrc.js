module.exports = {
	root: true,
	plugins: ['@typescript-eslint', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	parserOptions: {
		project: "tsconfig.json",
	},
	rules: {
		quotes: 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		semi: 'off',
		'@typescript-eslint/semi': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'eol-last': ['error', 'always'],
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true,
			},
		],
		'max-len': [
			'error',
			{
				code: 120,
				comments: 120,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
			},
		],
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'no-irregular-whitespace': 'error',
		indent: 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				flatTernaryExpressions: false,
				ignoredNodes: ['TSTypeParameterInstantiation'],
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
			},
		],
		'one-var': ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'no-mixed-spaces-and-tabs': 'error',
		'no-trailing-spaces': [
			'error',
			{
				ignoreComments: true,
			},
		],
		'padded-blocks': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
		'brace-style': ['error', '1tbs'],
		curly: ['error', 'all'],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
			{
				selector: 'class',
				format: ['PascalCase'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'error',
		'no-multi-spaces': 'error',
		'sort-imports': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
			},
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
	},
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'@typescript-eslint/explicit-member-accessibility': 'error',
			},
		},
	],
  env: {
    node: true,
    es2020: true,
  },
};
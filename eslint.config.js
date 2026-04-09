import { kitql } from '@kitql/eslint-config'

/** @type { import('eslint').Linter.Config[]} */
const config = [
	...kitql(),
	{
		name: 'app:rules',
		rules: {
			// Some custom things?
		},
	},
]

export default config

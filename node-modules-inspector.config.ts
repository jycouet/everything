import { defineConfig } from 'node-modules-inspector'

export default defineConfig({
	name: '@jyc.dev/everything',
	defaultFilters: {
		sourceType: 'prod',
		excludeWorkspace: true,
	},
	defaultSettings: {
		showPublishTimeBadge: true,
		showInstallSizeBadge: true,
		showFileComposition: true,
	},
	excludeDependenciesOf: [],
	excludePackages: ['typescript', 'vite', '@sveltejs/kit'],
	publint: true,
})

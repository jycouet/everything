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
  excludeDependenciesOf: ['eslint'],
  excludePackages: ['@sveltejs/kit', 'svelte', 'typescript', ],
  publint: true,
})

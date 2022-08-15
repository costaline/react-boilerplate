const path = require('path')
const { mergeConfig } = require('vite')

/** @type {import('@storybook/builder-vite').StorybookViteConfig} */
const config  = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],

	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

	core: {
		builder: '@storybook/builder-vite',
	},

	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},

	async viteFinal(config, options) {
		return mergeConfig(config, {
			resolve: {
				alias: {
					'@@': path.resolve(__dirname, "../src"),
				}
			}
		});
	},
};

module.exports = config

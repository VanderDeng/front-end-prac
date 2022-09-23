const CracoLessPlugin = require("craco-less");
const sassResourcesLoader = require("craco-sass-resources-loader");
const theme = require("./theme");

module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.output = {
				...webpackConfig.output,
				publicPath: process.env.NODE_ENV == "production" ? "/" : "/",
			};
			return webpackConfig;
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: theme,
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			plugin: sassResourcesLoader,
			options: {
				resources: "./src/theme.scss",
			},
		},
	],
};

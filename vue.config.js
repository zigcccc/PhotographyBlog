const path = require('path');
module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.sass$/,
					use: [
						//'vue-style-loader',
						//'css-loader',
						{
							loader: 'sass-resources-loader',
							options: {
								resources: [
									path.resolve(__dirname, './src/sass/_variables.sass'),
									path.resolve(__dirname, './src/sass/_mixins.sass')
								]
							}
						}
					]
				}
			]
		}
	}
};

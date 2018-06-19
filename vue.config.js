module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.sass$/,
					use: [
						'vue-style-loader',
						'css-loader',
						{
							loader: 'sass-resources-loader',
							options: {
								resources: [
									'./src/sass/_variables.sass',
									'./src/sass/_mixins.sass'
								]
							}
						}
					]
				}
			]
		}
	}
};

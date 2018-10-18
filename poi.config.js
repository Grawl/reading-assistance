const env = require('./utils/env')
module.exports = {
	port: env.DEV_PORT,
	html: {
		template: 'source/index.pug',
	},
}

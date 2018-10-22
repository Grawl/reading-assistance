const env = require('./utils/env')
module.exports = {
	port: env.DEV_PORT,
	html: {
		template: 'source/index.pug',
		title: 'Кот Бродского',
		description: 'Кот Бродского − это проект про книги, город, людей, котов, бабушкин ундервуд и старую шляпу.',
		step1videoURL: 'media/blackboard.mp4',
		step1videoType: 'video/mp4',
		step2videoURL: 'media/typewriter.mp4',
		step2videoType: 'video/mp4',
	},
}

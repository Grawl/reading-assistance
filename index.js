import Vue from 'vue'
import app from './source/index'
new Vue({
	el: '#video-presentation',
	data() {
		return {
			externalStorage: window['site'],
		}
	},
	render: h => h(app)
})

SystemJS.config({
	map: {
		libs: 'https://cdn.bootcss.com'
	},
	meta: {
		'*.html': {
			loader: 'javascript/libs/systemjs-plugin-text.js'
		}
	}
});
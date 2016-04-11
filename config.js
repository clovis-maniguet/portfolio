module.exports = {
	vhost: "clovismaniguet.dev",
	scripts: {
		app: ['./src/js/lib/Views/_view.js', './src/js/lib/**/*.js'],
		vendors: ['./bower_components/jquery/dist/jquery.min.js', './node_modules/handlebars/dist/handlebars.min.js', './node_modules/gsap/src/minified/TweenMax.min.js', './bower_components/fullpage.js/jquery.fullPage.min.js'],
		dist: './src/js/dist'
	},
	images: {
		src: ['assets/**', 'img/**'],
		build: ['build/assets', 'build/img']
	},
	styles: {
		sass: './src/sass/**/*.scss',
		dist: './src/stylesheets/'
	},
	templates: {
		hbs: './src/templates/**/*.hbs',
        namespace: 'templates',
		dist:'./src/js/dist/'
	},
	files: {
		src: ['fonts/**'],
		build: ['build/fonts']
	}
};
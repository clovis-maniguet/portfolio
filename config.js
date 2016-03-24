module.exports = {
	vhost: "clovismaniguet.dev",
	scripts: {
		app: ['./src/js/lib/**/*.js'],
		vendors: ['./bower_components/jquery/jquery.min.js', './node_modules/crossroads/dist/crossroads.min.js', './node_modules/signals/dist/signals.min.js', './node_modules/handlebars/dist/handlebars.min.js'],
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
        namespace: 'portfolio.templates',
		dist:'./src/js/dist/'
	},
	files: {
		src: ['fonts/**'],
		build: ['build/fonts']
	}
};
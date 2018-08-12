const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const gulpWebpack = require('webpack-stream');


// Config
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 0.5%', 'ie > 8'],
    remove: false
};

const webpackConfig = require('./webpack.config');


// Tasks
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Clean Tasks
['','css','js'].forEach((option) => {

    const taskName = option.length ? `clean:${option}` : 'clean';
    const taskSrc = option.length ? `dist/${option}` : 'dist'

    gulp.task(taskName, () => {
        return gulp
            .src(taskSrc)
            .pipe(clean())
    });

});

// SCSS --> CSS
gulp.task('parseScss', () => {
	return gulp
		.src('src/css/*.scss')
		.pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('watchScss', ['parseScss'], () => {
    gulp.watch('src/css/**/*.scss',['parseScss']);
});

// Webpack - dev
gulp.task('webpack-dev-server', function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		// if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
        console.log(err);
	});
});

// Webpack - Build
gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		// if(err) throw new gutil.PluginError("webpack:build", err);
		// gutil.log("[webpack:build]", stats.toString({
		// 	colors: true
		// }));
		callback();
	});
});


// Build
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// DEV
gulp.task('dev', ['watchScss', 'webpack-dev-server']);

// PROD
gulp.task("build", ['parseScss', "webpack:build"]);

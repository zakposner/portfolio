const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack');
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

// Required

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');


// Scripts Task

Leave all ths out until finished
gulp.task('scripts', function() {
	gulp.src(['app/js/**/*.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

// Html



// Watch Task

gulp.task('watch', function() {
	gulp.watch('app/js/**/*.js', ['scripts']);
});

// Default Task

gulp.task('default', ['scripts', 'watch']);
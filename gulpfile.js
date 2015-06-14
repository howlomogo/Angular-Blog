// Required

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;


// Javascript
gulp.task('javascript', function() {
	gulp.src('app/js/**/*.js')
	.pipe(reload({stream:true}));
});

// HTML
gulp.task('html', function() {
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));
});

// Browser-Sync
gulp.task('browser-sync', function() {
	browserSync({
		server:{
			baseDir: "./app/"
		}
	});
});

// Watch Task
gulp.task('watch', function() {
	gulp.watch('app/js/**/*.js', ['javascript']);
	gulp.watch('app/**/*.html', ['html']);
});

// Default Task
gulp.task('default', ['browser-sync', 'watch']);
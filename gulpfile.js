var gulp      = require('gulp'),
	gp_uglify = require('gulp-uglify'),
	gp_concat = require('gulp-concat');

gulp.task('default', ['scripts', 'styles']);

//Scripts: Uglify, ...
gulp.task('scripts', function(){
	gulp.src('client/js/*.js')
	.pipe(gp_uglify())
	.pipe(gulp.dest('client/minjs'))
	.pipe(gp_concat())
	.pipe(gulp.dest('client/minjs'))
});

//Styles: Uglify, ...
gulp.task('styles', function(){
	gulp.src('client/css/style.css')
	.pipe(gp_uglify())
	.pipe(gulp.dest('client/mincss'))
	.pipe(gp_concat())
	.pipe(gulp.dest('client/mincss'))
});

//Watch task: Watches scripts...
gulp.task('watch', function(){
	gulp.watch('client/js/*js', 'client/css/style.css', ['scripts','styles']);
})
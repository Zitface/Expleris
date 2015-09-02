var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('default', ['scripts', 'styles']);

//Scripts: Uglify, ...
gulp.task('scripts', function(){
	gulp.src('client/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('client/minjs'))
});

//Styles: Uglify, ...
gulp.task('styles', function(){
	console.log('Styles task has run');
});


//Watch task: Watches scripts...
gulp.task('watch', function(){
	gulp.watch('client/js/*js', ['scripts']);
})
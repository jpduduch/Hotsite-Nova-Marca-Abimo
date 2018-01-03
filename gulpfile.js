var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var files = "./src/js/*.js";

gulp.task('procurar por erros', function(){
	gulp.src(files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('concatenar e minificar', function(){
	gulp.src(files)
		.pipe(concat('./bin'))
		.pipe(rename('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./bin'));
});

gulp.task('default', function(){
	gulp.run('procurar por erros', 'concatenar e minificar');
	gulp.watch(files, function(event){
		gulp.run('procurar por erros','concatenar e minificar');
	})
})
var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task('sass', function(){
	return gulp.src('source/sass/*.scss')
	     .pipe(sass({outputStyle:'compressed'}))
	     .on('error', notify.onError({ title: 'Erro ao Compilar', massage: '<%= error.message %>'}))
	     .pipe(gulp.dest('dist/css'))
});

gulp.task('buildjs', function(){ 
	return gulp.src([
	'source/components/jquery/dist/jquery.js',
	'source/components/tether/dist/js/tether.js'
		])
	.pipe(gulp.dest('dist/js'))
});

gulp.task('move-fonts', function(){
	return gulp.src('source/components/components-font-awesome/fonts/**')
	.pipe(gulp.dest('dist/fonts'))
})

gulp.task('js', function(){
	return gulp.src('source/js/*.js')
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('demolidor', function(){
	gulp.watch('source/sass/**/*.scss',['sass'])
	gulp.watch('source/js/**/*.js',['js'])
});

gulp.task('default',['buildjs','sass','js','demolidor']);
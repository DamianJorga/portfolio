var gulp = require ('gulp');
var sass = require ('gulp-sass');

var cssDest = '../style';
var cssInputFile = 'sass/style.scss';
var watchedFiles = 'sass/**/*.scss';

gulp.task ('buildcss', function(){
    return gulp.src(cssInputFile)
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
    gulp.watch(watchedFiles, gulp.series('buildcss'))
});
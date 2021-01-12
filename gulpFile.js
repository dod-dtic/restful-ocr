// Include gulp
var gulp = require('gulp');
var zip = require('gulp-zip');

function build(){
    return gulp.src(['*','*/**', '!gulpFile.js', '!.*','!loadtest.sh'])
        .pipe(zip('restful-ocr.zip'))
        .pipe(gulp.dest('dist'));
}

exports.dist = build;
exports.default = build;

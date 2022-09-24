'use strict';

var gulp = require("gulp");
var sass = require('gulp-sass')(require("sass"));

function style(){
    return gulp.src("./sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
}

exports.style = style;
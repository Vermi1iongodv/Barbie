const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

function compileSass() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css')); // 
}

function watchSass() {
  gulp.watch('./src/scss/*.scss', compileSass);
}

gulp.task('sass', compileSass);
gulp.task('watch', watchSass);
gulp.task('default', gulp.series('sass', 'watch'));






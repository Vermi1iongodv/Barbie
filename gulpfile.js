const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

 


function compileSass() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));

}

function watchSass() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
}

gulp.task('sass', compileSass);
gulp.task('watch', watchSass);
gulp.task('default', gulp.series('sass', 'watch'));

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 5000 
  });

  
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass')).on('change', browserSync.reload)
  gulp.watch('./*.html').on('change', browserSync.reload);
  
});











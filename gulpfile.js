var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rjs = require('gulp-requirejs');

gulp.task('build', function() {
  return rjs({
    name: 'entry',
    baseUrl: 'assets/scripts',
    out: 'build.js'
  })
  .pipe(uglify())
  .pipe(gulp.dest('./assets/scripts'));
});
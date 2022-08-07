var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('uncss', function() {
  return gulp.src([
      'components/**/*.css',
    ])
    .pipe(uncss({
      html: [
        './build/index.html',
      ]
    }))
    .pipe(gulp.dest('css/uncss'));
});
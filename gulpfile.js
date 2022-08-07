var gulp = require('gulp');
var uncss = require('gulp-uncss');


gulp.task('uncss', function() {
  return gulp.src([
      'components/**/*.css',
      'components/Banner/banner.css'
    ])
    .pipe(uncss({
        html: ['public/index.html']
    }))
    .pipe(gulp.dest('css/uncss'));
});

gulp.task('default', ['uncss']);
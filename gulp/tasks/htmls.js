var gulp = require('gulp'),
fileinclude = require('gulp-file-include');


gulp.task('htmls', function() {
   return gulp.src(['./app/assets/htmls/index.html', './app/assets/htmls/*.html'])
      .pipe(fileinclude({
         prefix: '@@',
         basepath: '@file'   
      }))
      .pipe(gulp.dest('./app'));
})
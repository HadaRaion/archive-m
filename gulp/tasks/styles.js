var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexRgba = require('postcss-hexrgba');
cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
   return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, mixins, cssvars, nested, hexRgba, autoprefixer]))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .on('error', (error) => console.log(error.toString()))
      .pipe(gulp.dest('./app/temp/styles'))
})

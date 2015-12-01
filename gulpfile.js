/*!
 * gulp
 *
 * $ npm install
 */

// Load plugins.
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    consolidate = require('gulp-consolidate'),
    del = require('del');

// Fonts.
gulp.task('fonts', function () {
  var fontName = 'libricons',
      template = 'fontawesome-style', // you can also choose 'foundation-style'.
      cssClassPrefix = 'icon';
  gulp.src(['src/*.svg'])
    // Create a base icon font SASS file.
    .pipe(iconfontCss({
      fontName: fontName,
      targetPath: '../sass/_' + fontName + '.scss',
      fontPath: '../fonts/',
      path: 'templates/_icons.scss',
      cssClass: cssClassPrefix
    }))
    // Create font.
    .pipe(iconfont({
      fontName: fontName,
      normalize: true,
      fontHeight: 1001,
      appendUnicode: true,
      formats: ['ttf', 'woff', 'svg', 'woff2'] // also possible 'eot'
    }))
    .on('glyphs', function (glyphs, options) {
      var options = {
        glyphs: glyphs,
        fontName: fontName,
        fontPath: '../../fonts/', // Set path to font (from your CSS file if relative)
        className: cssClassPrefix
      };

      // Build sample CSS.
      gulp.src('templates/' + template + '.css')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: fontName }))
        .pipe(gulp.dest('dist/css/'));

      // Build sample html template.
      gulp.src('templates/' + template + '.html')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: fontName }))
        .pipe(gulp.dest('dist/'));
    })
    .pipe(gulp.dest('fonts/'));
});

// Clean.
gulp.task('clean', function (cb) {
  del(['dist/**/*'], cb);
});

// Default task.
gulp.task('default', ['clean', 'fonts']);

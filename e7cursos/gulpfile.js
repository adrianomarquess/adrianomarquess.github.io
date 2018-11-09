const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
// const clean = require('gulp-clean');

const cssFiles = 'css';

const sassDevOptions = {
  outputStyle: 'expanded'
};

const sassProdOptions = {
  outputStyle: 'compressed'
};

// gulp.task('clean', function() {
//   return gulp.src('dist', { force: true }).pipe(clean());
// });

gulp.task('sass:prod', function() {
  return gulp
    .src('scss/styles.scss')
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest(cssFiles));
});

gulp.task('sass', function() {
  return gulp
    .src('scss/styles.scss')
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssFiles));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series(['sass', 'sass:prod']));
});

// Default task - Run with command 'gulp'
gulp.task('default', gulp.series('watch'));

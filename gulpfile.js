const gulp = require('gulp');
const minify = require('gulp-minify');
const cssNano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));

const STATIC_PATH = 'static/';
const SRC_STATIC_PATH = 'src/static/';

function minifyjs() {
  return gulp.src('src/static/js/*.js', { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(gulp.dest(`${STATIC_PATH}js`));
}

function minifycss() {
  return gulp.src(`${SRC_STATIC_PATH}sass/styles.scss`)
    .pipe(sass())
    .pipe(cssNano('styles.css'))
    .pipe(gulp.dest(`${STATIC_PATH}css`));
}

function build() {
  return gulp.series(minifyjs, minifycss);
}

function watch() {
  gulp.watch(['src/static/js/*.js', `${SRC_STATIC_PATH}sass/*.scss`], build());
}

exports.default = gulp.series(minifyjs, minifycss);
exports.watch = watch;

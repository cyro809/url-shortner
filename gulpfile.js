const { src, dest, series } = require('gulp');
const minify = require('gulp-minify');
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));

const STATIC_PATH = 'static/';
const SRC_STATIC_PATH = 'src/static/';

function minifyjs() {
  return src('src/static/js/*.js', { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(dest(`${STATIC_PATH}js`));
}

function minifycss() {
  return src(`${SRC_STATIC_PATH}sass/styles.scss`)
    .pipe(sass())
    .pipe(concatCss('styles.css'))
    .pipe(dest(`${STATIC_PATH}css`));
}

exports.default = series(minifyjs, minifycss);

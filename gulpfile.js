const { src, dest } = require('gulp');
const minify = require('gulp-minify');

function minifyjs() {
  return src('src/static/js/*.js', { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(dest('static/js'));
}

exports.default = minifyjs;

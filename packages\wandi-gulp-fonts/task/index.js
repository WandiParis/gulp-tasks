/*eslint-env node */

const gulp = require('gulp');
const newer = require('gulp-newer');
const fontmin = require('gulp-fontmin');
const config = require('./config');

const task = (params = {}) => {
    const cfg = Object.assign({}, config, params);

    const {
        src,
        dest
    } = cfg

    const fonts = () => {
        return gulp.src(src)
            .pipe(newer(dest))
            .pipe(fontmin())
            .pipe(gulp.dest(dest))
    }

    fonts.displayName = 'fonts'
    fonts.description = 'Convert and optimizes fonts'

    return fonts
}

module.exports = task;

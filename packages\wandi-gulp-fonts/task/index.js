/*eslint-env node */

import gulp from 'gulp'
import newer from 'gulp-newer'
import fontmin from 'gulp-fontmin'
import config from './config'

const task = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

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

export default task
export {
    task as fonts
}

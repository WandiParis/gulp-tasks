/*eslint-env node */

import gulp from 'gulp'
import newer from 'gulp-newer'
import Fontmin from 'fontmin'
import config from './config'
import ttf2woff2 from 'gulp-ttf2woff2'

const task = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

    const {
        src,
        dest
    } = cfg

    const fonts = (done) => {
        const fontmin = new Fontmin()
            .src(src)
            .use(newer(dest))
            .use(ttf2woff2({clone: true}))
            .dest(dest)

        fontmin.run((err) => {
            if (err) {
                throw err
            }

            done()
        })
    }

    fonts.displayName = 'fonts'
    fonts.description = 'Convert and optimizes fonts'

    return fonts
}

export default task
export {
    task as fonts
}

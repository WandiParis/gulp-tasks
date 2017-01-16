/*eslint-env node */

import gulp from 'gulp'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import util from 'gulp-util'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import cssnano from 'cssnano'
import stylelint from 'gulp-stylelint'
import config from './config'

const lint = (src) => {
    const task = () =>
        gulp.src(src)
            .pipe(stylelint({
                syntax: 'scss',
                reporters: [
                    {formatter: 'string', console: true}
                ]
            }))
            .on('error', (err) => util.log(err.message))

    task.displayName = 'styles:lint'
    task.description = 'Lint SCSS'

    return task
}

const styles = (params = {production: false}) => {
    const cfg = {
        ...config,
        ...params
    }

    const {
        src,
        dest,
        lintSrc,
        autoprefixerOptions,
        pxToRemOptions,
        cssnanoOptions,
        sassOptions,
        production
    } = cfg

    const processors = [
        autoprefixer(autoprefixerOptions),
        pxtorem(pxToRemOptions)
    ].concat(production ? [cssnano(cssnanoOptions)] : [])

    const task = () => {
        return gulp.src(src)
            .pipe(production ? util.noop() : sourcemaps.init())
            .pipe(sass(sassOptions).on('error', sass.logError))
            .pipe(postcss(processors))
            .pipe(production ? util.noop() : sourcemaps.write())
            .pipe(gulp.dest(dest))
    }

    task.displayName = 'styles'
    task.description = 'Compile Sass / add prefixes to generated CSS'

    return cfg.lint ? gulp.series(lint(src), task) : task
}

export default styles
export {
    styles
}

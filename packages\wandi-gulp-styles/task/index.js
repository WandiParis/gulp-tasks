/*eslint-env node */

import gulp from 'gulp'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import util from 'gulp-util'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import cssnano from 'cssnano'
import minimist from 'minimist'
import config from './config'

const styles = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

    const {
        src,
        dest,
        autoprefixerOptions,
        pxToRemOptions
    } = cfg

    const {production} = minimist(process.argv.slice(2))

    const processors = [
        autoprefixer(autoprefixerOptions),
        pxtorem(pxToRemOptions)
    ]

    if (production) {
        processors.push(cssnano(cssnanoOptions))
    }

    const task = () => {
        return gulp.src(src)
            .pipe(production ? util.noop() : sourcemaps.init())
            .pipe(sass({
                outputStyle: 'nested'
            }).on('error', sass.logError))
            .pipe(postcss(processors))
            .pipe(production ? util.noop() : sourcemaps.write())
            .pipe(gulp.dest(dest))
    }

    task.displayName = 'styles'
    task.description = 'Compile Sass / add prefixes to generated CSS'

    return task
}

export default styles
export {
    styles
}

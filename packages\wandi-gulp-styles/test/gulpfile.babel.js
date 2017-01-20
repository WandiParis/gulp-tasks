import gulp from 'gulp'
import styles from '../dist/index'

const compile = styles()

const watch = () => {
    gulp.watch('assets/scss/global.scss', styles())
}

export {
    compile,
    watch
}

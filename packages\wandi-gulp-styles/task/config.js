/*eslint-env node */
/*eslint camelcase: 0 */

const config = {
    src: 'assets/scss/*.scss',
    dest: 'web/css',
    autoprefixerOptions: {
        browsers: [
            'last 2 versions',
            'Firefox ESR',
            'IE >= 9',
            'BlackBerry >= 7',
            'Android >= 2'
        ],
        cascade: false,
        remove: false
    },
    pxToRemOptions: {
        root_value: 16
    },
    cssnanoOptions: {
        autoprefixer: false,
        discardUnused: false,
        zindex: false,
        reduceIdents: false,
        mergeIdents: false
    }
}

export default config

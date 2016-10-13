'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*eslint-env node */
/*eslint camelcase: 0 */

var config = {
    src: 'assets/scss/*.scss',
    dest: 'web/css',
    autoprefixerOptions: {
        browsers: ['last 2 versions', 'Firefox ESR', 'IE >= 9', 'BlackBerry >= 7', 'Android >= 2'],
        cascade: false,
        remove: false
    },
    pxToRemOptions: {
        root_value: 16
    },
    cssnanoOptions: {
        autoprefixer: false,
        discardUnused: false,
        discardComments: { removeAll: true },
        zindex: false,
        reduceIdents: false,
        mergeIdents: false
    },
    sassOptions: {
        outputStyle: 'nested'
    }
};

exports.default = config;
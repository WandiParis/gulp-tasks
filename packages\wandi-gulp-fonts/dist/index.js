'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fonts = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*eslint-env node */

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpNewer = require('gulp-newer');

var _gulpNewer2 = _interopRequireDefault(_gulpNewer);

var _fontmin = require('fontmin');

var _fontmin2 = _interopRequireDefault(_fontmin);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _gulpTtf2woff = require('gulp-ttf2woff2');

var _gulpTtf2woff2 = _interopRequireDefault(_gulpTtf2woff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = function task() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var cfg = _extends({}, _config2.default, params);

    var src = cfg.src;
    var dest = cfg.dest;


    var fonts = function fonts(done) {
        var fontmin = new _fontmin2.default().src(src).use((0, _gulpNewer2.default)(dest)).use((0, _gulpTtf2woff2.default)({ clone: true })).dest(dest);

        fontmin.run(function (err) {
            if (err) {
                throw err;
            }

            done();
        });
    };

    fonts.displayName = 'fonts';
    fonts.description = 'Convert and optimizes fonts';

    return fonts;
};

exports.default = task;
exports.fonts = task;
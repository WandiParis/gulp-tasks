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

var _gulpFontmin = require('gulp-fontmin');

var _gulpFontmin2 = _interopRequireDefault(_gulpFontmin);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = function task() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var cfg = _extends({}, _config2.default, params);

    var src = cfg.src;
    var dest = cfg.dest;


    var fonts = function fonts() {
        return _gulp2.default.src(src).pipe((0, _gulpNewer2.default)(dest)).pipe((0, _gulpFontmin2.default)()).pipe(_gulp2.default.dest(dest));
    };

    fonts.displayName = 'fonts';
    fonts.description = 'Convert and optimizes fonts';

    return fonts;
};

exports.default = task;
exports.fonts = task;
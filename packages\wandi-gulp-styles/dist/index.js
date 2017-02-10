"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gulp = require("gulp");

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSass = require("gulp-sass");

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulpSourcemaps = require("gulp-sourcemaps");

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpPostcss = require("gulp-postcss");

var _gulpPostcss2 = _interopRequireDefault(_gulpPostcss);

var _gulpUtil = require("gulp-util");

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _autoprefixer = require("autoprefixer");

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _postcssPxtorem = require("postcss-pxtorem");

var _postcssPxtorem2 = _interopRequireDefault(_postcssPxtorem);

var _cssnano = require("cssnano");

var _cssnano2 = _interopRequireDefault(_cssnano);

var _gulpStylelint = require("gulp-stylelint");

var _gulpStylelint2 = _interopRequireDefault(_gulpStylelint);

var _gulpPlumber = require("gulp-plumber");

var _gulpPlumber2 = _interopRequireDefault(_gulpPlumber);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { production: false };

    var cfg = _extends({}, _config2.default, params);

    var src = cfg.src,
        dest = cfg.dest,
        lint = cfg.lint,
        autoprefixerOptions = cfg.autoprefixerOptions,
        pxToRemOptions = cfg.pxToRemOptions,
        cssnanoOptions = cfg.cssnanoOptions,
        sassOptions = cfg.sassOptions,
        production = cfg.production;


    var processors = [(0, _autoprefixer2.default)(autoprefixerOptions), (0, _postcssPxtorem2.default)(pxToRemOptions)].concat(production ? [(0, _cssnano2.default)(cssnanoOptions)] : []);

    var task = function task() {
        var stream = _gulp2.default.src(src).pipe((0, _gulpPlumber2.default)());

        if (lint) {
            stream.pipe((0, _gulpStylelint2.default)({
                syntax: "scss",
                reporters: [{
                    formatter: "string",
                    console: true
                }]
            }));
        }

        stream.pipe(production ? _gulpUtil2.default.noop() : _gulpSourcemaps2.default.init()).pipe((0, _gulpSass2.default)(sassOptions).on("error", _gulpSass2.default.logError)).pipe((0, _gulpPostcss2.default)(processors)).pipe(production ? _gulpUtil2.default.noop() : _gulpSourcemaps2.default.write()).pipe(_gulp2.default.dest(dest));

        return stream;
    };

    task.displayName = "styles";
    task.description = "Compile Sass / add prefixes to generated CSS";

    return task;
};

exports.default = styles;
exports.styles = styles;
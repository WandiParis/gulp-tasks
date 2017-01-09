'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sprite = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulp3 = require('gulp.spritesmith');

var _gulp4 = _interopRequireDefault(_gulp3);

var _gulpReplace = require('gulp-replace');

var _gulpReplace2 = _interopRequireDefault(_gulpReplace);

var _mergeStream = require('merge-stream');

var _mergeStream2 = _interopRequireDefault(_mergeStream);

var _rimraf = require('rimraf');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sprite = function sprite() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var cfg = _extends({}, _config2.default, params);

    var cssName = cfg.cssName,
        imgPath = cfg.imgPath,
        imgName = cfg.imgName,
        scssDest = cfg.scssDest,
        src = cfg.src;


    var task = function task() {
        (0, _rimraf.sync)(imgPath + '/' + imgName);

        var spriteStreams = _gulp2.default.src(src).pipe((0, _gulp4.default)({
            imgName: imgName,
            cssName: cssName
        }));

        spriteStreams.img.pipe(_gulp2.default.dest(imgPath));

        spriteStreams.css.pipe((0, _gulpReplace2.default)('\'' + imgName + '\'', '\'../img/' + imgName + '\'')).pipe(_gulp2.default.dest(scssDest));

        return (0, _mergeStream2.default)(spriteStreams.img, spriteStreams.css);
    };

    task.displayName = 'sprite';
    task.description = 'Merge icons into a sprite file and generate SCSS code to use it';

    return task;
};

exports.default = sprite;
exports.sprite = sprite;
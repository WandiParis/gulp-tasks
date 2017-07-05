const gulp = require("gulp");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const gifsicle = require("imagemin-gifsicle");
const svgo = require("imagemin-svgo");
const config = require("./config");

const images = (params = {}) => {
  const cfg = Object.assign({}, config, params);

  const { src, dest } = cfg;

  const images = () =>
    gulp
      .src(src)
      .pipe(newer(dest))
      .pipe(imagemin([mozjpeg(), pngquant(), gifsicle(), svgo()]))
      .pipe(gulp.dest(dest));

  images.displayName = "images";
  images.description = "Optimize images weight";

  return images;
};

module.exports = images;

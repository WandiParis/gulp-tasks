const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const util = require("gulp-util");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const cssnano = require("cssnano");
const stylelint = require("gulp-stylelint");
const plumber = require("gulp-plumber");
const config = require("./config");

const styles = (params = { production: false }) => {
  const cfg = Object.assign({}, config, params);

  const {
    src,
    dest,
    lint,
    autoprefixerOptions,
    pxToRemOptions,
    cssnanoOptions,
    sassOptions,
    production
  } = cfg;

  const processors = [
    autoprefixer(autoprefixerOptions),
    pxtorem(pxToRemOptions)
  ].concat(production ? [cssnano(cssnanoOptions)] : []);

  const task = () => {
    const stream = gulp.src(src).pipe(plumber());

    if (lint) {
      stream.pipe(
        stylelint({
          syntax: "scss",
          reporters: [
            {
              formatter: "string",
              console: true
            }
          ]
        })
      );
    }

    stream
      .pipe(production ? util.noop() : sourcemaps.init())
      .pipe(sass(sassOptions).on("error", sass.logError))
      .pipe(postcss(processors))
      .pipe(production ? util.noop() : sourcemaps.write())
      .pipe(gulp.dest(dest));

    return stream;
  };

  task.displayName = "styles";
  task.description = "Compile Sass / add prefixes to generated CSS";

  return task;
};

module.exports = styles;

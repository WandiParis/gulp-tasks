import gulp from "gulp";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import postcss from "gulp-postcss";
import util from "gulp-util";
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";
import cssnano from "cssnano";
import stylelint from "gulp-stylelint";
import plumber from "gulp-plumber";
import config from "./config";

const styles = (params = { production: false }) => {
    const cfg = {
        ...config,
        ...params,
    };

    const {
        src,
        dest,
        lint,
        autoprefixerOptions,
        pxToRemOptions,
        cssnanoOptions,
        sassOptions,
        production,
    } = cfg;

    const processors = [
        autoprefixer(autoprefixerOptions),
        pxtorem(pxToRemOptions),
    ].concat(production ? [cssnano(cssnanoOptions)] : []);

    const task = () => {
        const stream = gulp.src(src)
            .pipe(plumber());

        if (lint) {
            stream.pipe(stylelint({
                syntax: "scss",
                reporters: [{
                    formatter: "string",
                    console: true,
                }],
            }));
        }

        stream.pipe(production ? util.noop() : sourcemaps.init())
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

export default styles;
export {
    styles,
};

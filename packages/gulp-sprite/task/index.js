const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");
const replace = require("gulp-replace");
const merge = require("merge-stream");
const config = require("./config");
const uniqid = require("uniqid");
const newer = require("gulp-newer");

const sprite = (params = {}) => {
  const cfg = Object.assign({}, config, params);

  const { cssName, imgPath, imgName, scssDest, src } = cfg;

  const task = () => {
    const spriteStreams = gulp.src(src).pipe(newer(imgPath + "/" + imgName)).pipe(
      spritesmith({
        imgName,
        cssName
      })
    );

    spriteStreams.img.pipe(gulp.dest(imgPath));

    spriteStreams.css
      .pipe(replace(`'${imgName}'`, `'../img/${imgName}'`))
      .pipe(replace("nth($sprite, 9)", `'#{nth($sprite, 9)}?${uniqid()}'`))
      .pipe(gulp.dest(scssDest));

    return merge(spriteStreams.img, spriteStreams.css);
  };

  task.displayName = "sprite";
  task.description =
    "Merge icons into a sprite file and generate SCSS code to use it";

  return task;
};

module.exports = sprite;

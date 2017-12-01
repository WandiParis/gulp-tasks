# gulp-sprite

Gulp task that generates a sprite from a PNG icons directory.

[![npm version](https://badge.fury.io/js/%40wandiparis%2Fgulp-sprite.svg)](https://badge.fury.io/js/%40wandiparis%2Fgulp-sprite)

## Installation

```
npm install --save-dev @wandiparis/gulp-sprite
```

## Usage

Use with default parameters :

```js
// gulpfile.js

const sprite = require("@wandiparis/gulp-sprite");

const compile = sprite();

module.exports = {
    compile
};
```

Use with custom parameters (see below for the full list) :

```js
// gulpfile.js

const sprite = require("@wandiparis/gulp-sprite");

const compile = styles({
    cssName: "my_sprite.scss",
    scssDest: "path/to/dest",
});

module.exports = {
    compile
};
```

## Parameters

### cssName

The name of the generated stylesheet.

Default value : `'_sprite.scss'`

### imgPath

The path of the directory where to put the generated sprite image.

Default value : `'assets/img'`

### imgName

The name of the generated sprite image.

Default value : `'sprite.png'`

### dest

See [`gulp.dest` `path` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Default value : `'assets/scss/utils'`

### src

See [`gulp.src` `globs` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Default value : `'assets/img/icons/*.png'`

# gulp-images

Gulp task that optimizes images

[![npm version](https://badge.fury.io/js/%40wandiparis%2Fgulp-images.svg)](https://badge.fury.io/js/%40wandiparis%2Fgulp-images)

## Installation

```
npm install --save-dev @wandiparis/gulp-images
```

## Usage

Use with default parameters :

```js
// gulpfile.js

const images = require("@wandiparis/gulp-images");

const compile = images();

module.exports = {
    compile
};
```

Use with custom parameters (see below for the full list) :

```js
// gulpfile.js

const images = require("@wandiparis/gulp-images");

const compile = images({
    src: "path/to/img/**/*.{jpg,png}",
    dest: "path/to/dest"
});

module.exports = {
    compile
};
```

## Parameters

### src

See [`gulp.src` `globs` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Default value : `'assets/img/**/*.{jpg,png,gif,svg}'`

### dest

See [`gulp.dest` `path` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Default value : `'web/img'`

### jpg

See [imagemin-mozjpeg options](https://github.com/imagemin/imagemin-mozjpeg#options)

Default value :

```js
{
    quality: 95
}
```

### png

See [imagemin-pngquant options](https://github.com/imagemin/imagemin-mozjpeg#options)

Default value : `{}`

### gif

See [imagemin-gifsicle options](https://github.com/imagemin/imagemin-gifsicle#options)

Default value : `{}`

### svg

See [imagemin-svgo options](https://github.com/imagemin/imagemin-svgo#options)

Default value :

```js
{
    plugins: [
        { removeViewBox: true }
    ]
}
```

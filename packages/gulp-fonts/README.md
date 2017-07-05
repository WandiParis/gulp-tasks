# gulp-fonts

Gulp task that converts and optimizes fonts

## Installation

```
npm install --save-dev @wandiparis/gulp-fonts
```

## Usage

Use with default parameters :

```js
// gulpfile.js

const fonts = require("@wandiparis/gulp-fonts");

const compile = fonts();

module.exports = {
    compile
};
```

Use with custom parameters (see below for the full list) :

```js
// gulpfile.js

const fonts = require("@wandiparis/gulp-fonts");

const compile = fonts({
    src: "path/to/fonts/**/*",
    dest: "path/to/dest",
});

module.exports = {
    compile
};
```

## Parameters

### src

See [`gulp.src` `globs` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Default value : `"assets/fonts/**/*"`

### dest

See [`gulp.dest` `path` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Default value : `"web/fonts"`

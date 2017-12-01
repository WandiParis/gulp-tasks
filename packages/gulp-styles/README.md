# gulp-styles

Gulp task that compiles SCSS files.

[![npm version](https://badge.fury.io/js/%40wandiparis%2Fgulp-styles.svg)](https://badge.fury.io/js/%40wandiparis%2Fgulp-styles)

## Installation

```
npm install --save-dev @wandiparis/gulp-styles
```

## Usage

Default parameters :

```js
// gulpfile.js

const styles = require("@wandiparis/gulp-styles");

const compile = styles();

export {
    compile
};
```

Custom parameters (see below for the full list) :

```js
// gulpfile.js

const styles = require("@wandiparis/gulp-styles");

const compile = styles({
    src: "path/to/scss/global.scss",
    dest: "path/to/dest"
});

export {
    compile
};
```

## Parameters

### src

See [`gulp.src` `globs` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Default value : `'assets/scss/*.scss'`

### dest

See [`gulp.dest` `path` parameter](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Default value : `'web/css'`

### autoprefixerOptions

An [Autoprefixer configuration object](https://github.com/postcss/autoprefixer#options).

Default value :

```js
{
    browsers: [
        'last 2 versions',
        'Firefox ESR',
        'IE >= 9',
        'BlackBerry >= 7',
        'Android >= 2'
    ],
    cascade: false,
    remove: false
}
```

### pxToRemOptions

A [postcss-pxtorem configuration object](https://github.com/cuth/postcss-pxtorem#options).

Default value :

```js
{
    root_value: 16
}
```

### cssnanoOptions

A [cssnano configuration object](http://cssnano.co/optimisations/).

Default value :

```js
{
    autoprefixer: false,
    discardUnused: false,
    discardComments: { removeAll: true },
    zindex: false,
    reduceIdents: false,
    mergeIdents: false
}
```

### sassOptions

A [node-sass configuration object](https://github.com/sass/node-sass#options).

Default value :

```js
{
    outputStyle: "nested"
}
```

### production

Type: `boolean`

Default value : `false`

If `production === true`, then the output is minified. Be aware that the
execution time is longer when you minify the output.

Minification includes the following :

* No sourcemaps generation
* [cssnano optimisation](http://cssnano.co/optimisations/) that are not
explicitly disabled

### lint

Type: `boolean`

Default value : `true`

Enables linting using [StyleLint](http://stylelint.io/).

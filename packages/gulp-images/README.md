# gulp-images

Tâche gulp de compression d'images

## Installation

```
npm install --save-dev @wandiparis/gulp-images
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.js

const images = require("@wandiparis/gulp-images");

const compile = images();

module.exports = {
    compile
};
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

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

## Paramètres

### src

Voir [le paramètre `globs` de `gulp.src`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Valeur par défaut : `'assets/img/**/*.{jpg,png,gif,svg}'`

### dest

Voir [le paramètre `path` de `gulp.dest`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Valeur par défaut : `'web/img'`

### jpg

Voir [les options de imagemin-mozjpeg](https://github.com/imagemin/imagemin-mozjpeg#options)

Valeur par défaut :

```js
{
    quality: 95
}
```

### png

Voir [les options de imagemin-pngquant](https://github.com/imagemin/imagemin-mozjpeg#options)

Valeur par défaut : `{}`

### gif

Voir [les options de imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle#options)

Valeur par défaut : `{}`

### svg

Voir [les options de imagemin-svgo](https://github.com/imagemin/imagemin-svgo#options)

Valeur par défaut :

```js
{
    plugins: [
        { removeViewBox: true }
    ]
}
```

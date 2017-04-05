# gulp-fonts

Tâche gulp pour convertir et compresser des fonts

## Installation

```
npm install --save-dev @wandiparis/gulp-fonts
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.js

const fonts = require("@wandiparis/gulp-fonts");

const compile = fonts();

module.exports = {
    compile
};
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

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

## Paramètres

### src

Voir [le paramètre `globs` de `gulp.src`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Valeur par défaut : `"assets/fonts/**/*"`

### dest

Voir [le paramètre `path` de `gulp.dest`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Valeur par défaut : `"web/fonts"`

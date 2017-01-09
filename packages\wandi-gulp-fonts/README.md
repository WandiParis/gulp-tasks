# gulp-fonts

Tâche gulp pour convertir et compresser des fonts

## Installation

```
npm install --save-dev "github:wandiparis/gulp-fonts"
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.babel.js

import fonts from 'gulp-fonts'

const compile = fonts()

export {
    compile
}
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

```js
// gulpfile.babel.js

import images from 'gulp-fonts'

const compile = fonts({
    src: 'path/to/fonts/**/*',
    dest: 'path/to/dest'
})

export {
    compile
}
```

## Paramètres

### src

Voir [le paramètre `globs` de `gulp.src`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Valeur par défaut : `'assets/fonts/**/*'`

### dest

Voir [le paramètre `path` de `gulp.dest`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Valeur par défaut : `'web/fonts'`

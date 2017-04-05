# gulp-sprite

Génère un sprite à partir d'un dossier d'icônes PNG.

## Installation

```
npm install --save-dev @wandiparis/gulp-sprite
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.js

const sprite = require("@wandiparis/gulp-sprite");

const compile = sprite();

module.exports = {
    compile
};
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

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

## Paramètres

### cssName

Nom du fichier de style généré.

Valeur par défaut : `'_sprite.scss'`

### imgPath

Chemin du dossier dans lequel l'image générée sera écrite.

Valeur par défaut : `'assets/img'`

### imgName

Nom du fichier de l'image générée.

Valeur par défaut : `'sprite.png'`

### dest

Voir [le paramètre `path` de `gulp.dest`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#path).

Valeur par défaut : `'assets/scss/utils'`

### src

Chemin des images sources. Voir [le paramètre `globs` de `gulp.src`](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#globs).

Valeur par défaut : `'assets/img/icons/*.png'`

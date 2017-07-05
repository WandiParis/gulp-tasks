# gulp-javascripts

Tâche gulp pour compiler le JS

## Installation

```
npm install --save-dev @wandiparis/gulp-javascripts
```

## Utilisation

Paramètres par défaut :

```js
// gulpfile.js

const javascripts = require("@wandiparis/gulp-javascripts");

const compile = javascripts({
    rootDir: __dirname,
});

module.exports = {
    compile,
};
```

Paramètres custom (voir ci-dessous pour la liste complète des paramètres) :

```js
// gulpfile.js

const javascripts = require("@wandiparis/gulp-javascripts");
const path = require("path");

const compile = javascripts({
    production: true,
    rootDir: __dirname,
}, {
    entry: "./path/to/entry.js",
    output: {
        path: path.join(__dirname, "path", "to", "output"),
        filename: "output.js",
    },
});

module.exports = {
    compile,
};
```

## watch

Pour utiliser cette tâche dans une tâche `watch`, il ne faut pas utiliser la
méthode `watch` de Gulp, mais faire ceci :

```js
const baseJavascripts = require("@wandiparis/gulp-javascripts");

const watch = () => {
    baseJavascripts({
        rootDir: __dirname
    }, {
        watch: true
    });
};
```

De cette manière, le mode `watch` de webpack est utilisé. Celui-ci est très
rapide puisqu'il utilise un cache interne qui lui permet de ne regénérer que
ce qui a changé dans le module.

## `.babelrc`

La tâche utilise [babel](https://babeljs.io/) et
[babel-preset-env](https://github.com/babel/babel-preset-env). Il faut donc
ajouter un fichier `.babelrc` à la racine du projet qui utilise la tâche. Ce
fichier est de la forme suivante :

```json
{
  "presets": ["env"]
}
```

Afin de lister les navigateurs sur lesquels le site va tourner, il est
préférable d'ajouter un [fichier de configuration browserslist](https://github.com/ai/browserslist#config-file)
ou une [propriété `browserslist`](https://github.com/ai/browserslist#packagejson) au `package.json`. Cela permet à tous les outils ayant besoin d'un liste de
navigateurs de se baser sur la même liste, et ainsi de n'en maintenir qu'une.


Pour une liste exhaustive des options, voir la documentation de
[babel-preset-env](https://github.com/babel/babel-preset-env).

## Paramètres

### params

Type: `object`

#### params.production

Type: `boolean`

Valeur par défaut : `false`

Si `params.production === true`, alors le bundle sera minifié. Le temps de
compilation est plus long avec minification.

#### params.rootDir

Type: `string`

Pas de valeur par défaut

Ce paramètre est obligatoire. Il doit être le chemin absolu jusqu'à la racine
du projet. Généralement, passer `__dirname` lorsqu'on initialise la tâche dans
le `gulpfile.js` suffit (voir les exemples ci-dessus).

### webpackConfig

Type: `object`

Un objet de configuration Webpack. Vous trouverez la documentation de Webpack
sur leur [site](https://webpack.js.org/configuration/).

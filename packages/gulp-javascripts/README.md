# gulp-javascripts

Gulp task that transpiles and bundles JavaScript

[![npm version](https://badge.fury.io/js/%40wandiparis%2Fgulp-javascripts.svg)](https://badge.fury.io/js/%40wandiparis%2Fgulp-javascripts)

## Installation

```
npm install --save-dev @wandiparis/gulp-javascripts
```

## Usage

Use with default parameters :

```js
// gulpfile.js

const javascripts = require("@wandiparis/gulp-javascripts");

const compile = javascripts();

module.exports = {
    compile,
};
```

Use with custom parameters (see full list below) :

```js
// gulpfile.js

const javascripts = require("@wandiparis/gulp-javascripts");
const path = require("path");

const compile = javascripts(true, {
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

To use this task in a `watch` task, you should not use gulp's `watch` method,
but use webpack's watch mode :

```js
const baseJavascripts = require("@wandiparis/gulp-javascripts");

const watch = () => {
    baseJavascripts(false, {
        watch: true
    });
};
```

Webpack's watch mode is fast because it uses an internal cache that allows it to
recompile only code chunks that changed.

## `.babelrc`

The task uses [babel](https://babeljs.io/) and
[babel-preset-env](https://github.com/babel/babel-preset-env). You must create a
`.babelrc` file at the root of your project :

```json
{
  "presets": ["env"]
}
```

If you want to specify the browsers that your website supports, you must create
a [browserslist config file](https://github.com/ai/browserslist#config-file) or
add a [`browserslist` property](https://github.com/ai/browserslist#packagejson)
to your `package.json`. This way, all the tools that need to know the browser
your website supports will refer to this file.

## Parameters

### production

Type: `boolean`

Default value : `false`

If `production === true`, then the bundle is minified. Be aware that the
execution time is longer when you minify the output.

### webpackConfig

Type: `object`

A [webpack configuration object](https://webpack.js.org/configuration/).

Default value : see [config.js](/packages/gulp-javascripts/task/config.js)

# gulp-javascripts

Gulp task that transpiles and bundles JavaScript

## Installation

```
npm install --save-dev @wandiparis/gulp-javascripts
```

## Usage

Use with default parameters :

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

Use with custom parameters (see full list below) :

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

To use this task in a `watch` task, you should not use gulp's `watch` method,
but use webpack's watch mode :

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

### params

Type: `object`

#### params.production

Type: `boolean`

Default value : `false`

If `params.production === true`, then the bundle is minified. Be aware that the
execution time is longer when you minify the output.

#### params.rootDir

Type: `string`

Required, no default value.

This is the absolute path to your project's root directory. Usually, pass
`__dirname` will do the job.

### webpackConfig

Type: `object`

A [webpack configuration object](https://webpack.js.org/configuration/).

Default value : see [config.js](/packages/gulp-javascripts/task/config.js)

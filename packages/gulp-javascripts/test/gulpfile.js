const javascripts = require("../task");

const compile = javascripts({
    rootDir: __dirname,
});

module.exports = {
    compile,
};

var cooking = require('cooking');
var config = require('./config');

cooking.set({
    entry: './src/data.js',
    dist: './lib/',
    clean: false,
    template: false,
    format: 'umd',
    moduleName: 'DATA',
    extends: ['vue2', 'saladcss', 'buble'],
    alias: config.alias
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'data.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('vue.preserveWhitespace', false);

module.exports = cooking.resolve();

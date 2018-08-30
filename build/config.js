var Components = require('../components.json');
var path = require('path');
var dependencies = require('../package.json').dependencies;
var externals = {};
var pkg = {};
Object.keys(dependencies).forEach(function (key) {
    externals[key] = key;
    pkg[key] = key;
});
exports.externals = Object.assign({
    vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
    }
}, externals);
exports.pkg = Object.assign({
    vue: 'vue'
}, pkg);

exports.alias = {
    'src': path.join(__dirname, '../src'),
    'vue': 'vue/dist/vue.js',
    '@assets': 'example/assets',
    '@pages': 'example/pages'
    
};

exports.jsexclude = /node_modules|lib/;

exports.extends = ['vue2', 'saladcss', 'buble'];


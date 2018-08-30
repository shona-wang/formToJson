var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{name}}\';';
// var ISNTALL_COMPONENT_TEMPLATE = '  Vue.component({{name}}.name, {{name}});';
var ISNTALL_COMPONENT_TEMPLATE = `
    if (toString.call({{data}}) == "[object Object]") {
        for (let i in {{data}}) {
            Vue.component({{data}}[i].name, {{data}}[i]);
        }
    }else{
        Vue.component({{data}}.name, {{data}});
    }
`;
var MAIN_TEMPLATE = `import Vue from 'vue';
{{include}}
const version = '{{version}}';
const install = function(Vue, config = {}) {
  if (install.installed) return;
{{install}}
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version,
{{list}}
};
`;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var includeComponentTemplateSet = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
    var componentName = uppercamelcase(name);

    includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
        name: name,
        tpl: name +'View'
    }));
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
        data: name
    }));
    listTemplate.push(`  ${name}`);
});
var template = render(MAIN_TEMPLATE, {
    include: includeComponentTemplate.join('\n'),
    install: installTemplate.join('\n'),
    version: process.env.VERSION || require('../../package.json').version,
    list: listTemplate.join(',\n')
});
fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

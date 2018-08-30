var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var DATA_OUT_PATH = path.join(__dirname, '../../src/data.js');
var DATA_IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/data.js\';';
var DATA_TEMPLATE = `{{import}}
    let dataJson = {{{arr}}};
    export default dataJson;
`;
var ComponentNames = Object.keys(Components);
var dataTemArr = [];
var componentsArr = [];

ComponentNames.forEach(name => {
    var componentName = uppercamelcase(name);
    dataTemArr.push(render(DATA_IMPORT_TEMPLATE, {
        name: name + 'Data',
        package: name
    }));
    componentsArr.push(name + 'Data');
});
var dataTemplate = render(DATA_TEMPLATE, {
    import: dataTemArr.join('\n'),
    arr: componentsArr.join(',')
});
fs.writeFileSync(DATA_OUT_PATH, dataTemplate);
console.log('[build entry] DONE:', DATA_OUT_PATH);

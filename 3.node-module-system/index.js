const lodash = require('lodash');

const names = ["duy","thuan","anh","tuyen"];
const capitalize = lodash.map(names,lodash.capitalize);

console.log(capitalize)
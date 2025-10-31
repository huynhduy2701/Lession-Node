const { log } = require('console');
const path = require('path');

console.log("Directory file name " ,path.dirname(__filename));
console.log("Directory directory name " ,path.dirname(__dirname));

console.log("file name :  " ,path.basename(__filename));

console.log("File extension :  " ,path.extname(__filename));

const joinPath = path.join("/user","huynhduy","documents","node","lession");
console.log("Joined path : ", joinPath);

const resolvePath = path.resolve("user","documents","node","lession");
console.log("Resolve path : ", resolvePath);

const normalizePath = path.normalize("/user/.documents/../node/project");
console.log("normalize Path:" ,normalizePath)
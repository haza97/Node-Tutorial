//We can also act with the filepath in node.js
const { log } = require('console')
const path = require('path')
const { join } = require('path')
//Platform specific separator

console.log(path.sep)

//Normalized result path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//only want the last part:
const base = path.basename(filePath)
console.log(base);

//path.resolve gives an absolute path
//It takes a sequence of paths and gives an absolute
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);

//The application runs in different environments, abolute can help with flexibility
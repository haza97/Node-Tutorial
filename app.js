//npm - global command, comes with node automatically
//check with npm --version

//local dependency - only use the package in this particular project
// npm i <packagename>

//global dependency - use it in any project
//npm install -g <packagename>
//or on mac sudo npm install -g <packagename>

//We'll start with local, because of npx global is less useful

//package.json - manifest file( stores info on what's in there)
//manual approach(create package.json it in root, creat properties etc)
//npm init(step by step press enter to skip)
//npm init -y (all default selections)
//if you want to post to npm, the name will have to be unique eventually

//we need package json to install, because it is now a dependency
//We added lodash as an example
//all dependencies are stored in node_modules

//An example
const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
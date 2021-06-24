// Modules
//Node executes one file, but we can split the code in modules
//We moved all names and the function into different .js files
//But how do we access them in app.js?
//We use exports in the individual js files!

//Now we can accesss the exports with require
//Always start with ./ for 3rd party modules, without is for built in
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

//console.log(data)
//sayHi('sue')
//sayHi(names.peter)
//sayHi(names.john)






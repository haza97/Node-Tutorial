console.log(module)
//There's something called exports
//Whatever I throw in there I can use in the application anywhere

// local
const secret = "SUPER SECRET"
//share
const john = "john"
const peter = "peter"

module.exports = {john, peter}
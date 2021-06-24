//This is not ordinary JS, we don't have a window
//Note that you dont need ./ since the module is built-in
const os = require('os')

//Info about current user
const user = os.userInfo()
console.log(user);

//System uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);
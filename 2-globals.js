//Globals: - There's no window in Node
//But the globals are things we always have access to instead

//Important ones:
//__dirname - path to current directory
//__filename - file name
//require - function to use modules (CommonJs)
//module - info about current module (file)
//process - info about env where the program is executed
//console - good old console
console.log(__dirname);

//setTimeout and setInterval both work too

//You don't need to add .js to execute!
//You do need to type node tho, until we install exernal libraries

// Modules
//Node executes one file, but we can split the code in modules
const john = "john"
const pere = "peter"

const sayHi = (name) => {
    console.log(`hello there ${name}`);
}

sayHi('sue')
sayHi(peter)
sayHi(john)

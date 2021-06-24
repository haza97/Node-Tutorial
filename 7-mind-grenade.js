const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is: ${num1 + num2}`);
}

addValues()

//If we do it like this, the function will run when you require it
//That's how require works: it wraps the .js file in a function and runs it

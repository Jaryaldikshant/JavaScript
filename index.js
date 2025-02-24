
var x  = 7;

function getName() {
    console.log("Dikshant Jaryal");
}


getName();
console.log(x);
console.log(getName);


// this undefined thing is due to Hoisting 

// Hoisting is a phenomenon in JavaScript where variable and function declarations are moved (hoisted) to the top of their scope before execution, allowing them to be accessed before their actual declaration in the code.

console.log(y);  //  Outputs: undefined (variable is hoisted but not initialized)
var y = 10;
console.log(y);  // ✅ Outputs: 10


var a = 10;

function b() {
    var x = 1100;
}

console.log(window.a); // console.log(this.a)  is the same thing
console.log(x);

// the normal variable is in the global space, but the variable inside the function is not in the global space , although the function is in global space, and these variable and function get attached to that global variable which is the window word : can check in the broweser console


function x() {
    var a = 9;
    function y() {
        console.log(a);
    }
    y();
}
x();


// A closure is a function that has access to its own scope, the outer function’s variables, and global variables, even after the outer function has finished executing. This enables functions to “remember” their environment.

// closures: Bundle of functions with its lexical environment


// Function along with its lexical scope forms a closures 

function k(){
    var z = function l(){
        console.log(z);
    }
    l();
}
k();

// in JS: we can pass the fucntion as the variable value and even pass the function as a perameter and we can also return it 

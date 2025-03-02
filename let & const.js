// console.log(a);
let a = 10;


console.log(a);

const x = 1000;
console.log(x);

var b = 30;
console.log(b);


// let and const are hoisted in the javaScript

// Temporal Dead Zone: the time b/w since the let variable was hoisted and till it it initialized to some value form line 2 to 5

// when ever we try to access any variable in the "Temporal Dead Zone" it gives us a reference error


// window.b = 30

// but when we try to access this window.a = it shows us undefinces as a is not present in the global space , they are stored in the diff space which is reserved for let and const

// const : behave similar to the let or it is even more strict 

// we can declare let and initialize it later on , but we can't do this with const we have to intilize it when we declare otherwise it will give us type error 

// syntax error : missing syntax

// type error: const type of variable should be initilized when declare 

// reference error: when javaScript engine tries to find out a specific variable inside the memory space or you can't access it 





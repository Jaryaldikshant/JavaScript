

function a(){
    var b = 10;
    c(); 
    function c() {  
         console.log(b);
    }
}

a();




// Lexical environment: local memory + lexical environment of parent (lexical parent)

// lexical parent : where variable actually sit inside the code, here c is inside the a, so a is the lexical parent
 
// how this code works: 

// first it check the value of b inside the local memory if found it will print, if not

// it will check in the lixical environment of parent which is a for c

// if b found there it will print if not, then it will check in his parent which is the global here, 

// if present here it will print , if not it will through ReferenceError.

// Scope Chain: And this way of finding is called scope chain and it defines wheather the variable inside the code is present or not

// scope: where we can access a specific vairable or a function in the code
 
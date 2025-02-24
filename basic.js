var n = 2;
function square(num){
    var ans = num*num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);



// Here Execution context is created with two phases 

// memory creating phase:-
// here value of n is undefined and 
// square function will store as it is and 
// square2 will also be undefined
// square4 will also undefined

// code execution phase:-
// undefined will be replaced with exact value of n
// from line number 2-5 there is nothing to execute so it moves to line number 7, 
// here function is invoked and brand new Executin Context is created again in the code execution phase

// again two phases 
// memory creating phase :- 
// here value of num and ans is undefined

// code execution phase:-
// here value of num is replaced with 2 and
//  ans will also be updated with num*num which is 4
// all this going line by line now we will move to next line of function which is return ans 
// means function is finished it return the control back to the execution context
// now return to the place where function was invoked to line no. 7

// now undefined of squre2 wil be replaced by this ans which is 4 here, num is 2


// again whole process is done and undefined value of square4 is replaced with the ans which 16 here, num is 4







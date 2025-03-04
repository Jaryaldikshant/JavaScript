// function x() {
//     var i = 10;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste JavaScript");
// }
// x();

// setTimeout take the call back fucntion attached to the timer, when timer expire it call that function 



// function x() {

//     for (var i = 1; i <= 8; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello");
// }
// x();

// in this above code it will not work as we are seeing it , due to closure it will store the last updated value of i and point all the i to that value so we get 9 9 9 9 ......


// to resolve this we can use let instead of var , because let is block-scoped as it store every value of i to new storage 


//  or if we have to use var we need to define another closure 

function x() {
    for (var i = 1; i <= 4; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Dikshant");
}

x();






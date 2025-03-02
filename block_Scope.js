// {
// }

// block is defined by {}

// also known as compound statement , used to combine multiple js statements into group

// group is used where js expect a single statement 

// if (true) // here js expect the single statment, so we can use group here
// {
//     var a = 10;
// }



// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

// console.log(b);
// console.log(c);  they both give error

// Block-Scope: where all variables and functions can be accessed inside the block

// let and const are block-scoped means they are stored in the diff memory space which is reserved for these and we can't access it out of the block, where as var can be accessible as it store in global storage




// Shadowing: if we have same named variable outside the block, so the varible inside the block shadow the outer one, and value of the outer one will also be changed
// var a = 100;
// {
//     var a = 67;
//     let b = 45;
//     const c = 98;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);


// in let it store both let values in two diff memeory, outside the block it will pointing to outer one and value will not changed



// Illegal Shadowing: can't use let using var inside it with the same variable 

// let x = 20;
// {
//     var x = 20;
// }

// this above code it wrong


// Block-Scope also follow the lexical environment


// each and every block has its own lexical environment (local memory + lexical environment of parent)

const a = 20;
{
    const a = 10;
    {
        const a = 33;
        console.log(a);
    }
}


// Arrow functions: same as function 


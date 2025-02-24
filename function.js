
var x = 1;
a();
b();
console.log(x);
b();

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 50;
    console.log(x);
}




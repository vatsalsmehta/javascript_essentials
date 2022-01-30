//! Functionality 1

var x=5;
console.log("Initially :"+x);
test1();
console.log("After coming out of function :"+x);


function test1(){
    var x=4;  
    //? Here variable x is limited to the scope of this function and won't change global value of x
    console.log("Inside function test 1: "+x);
}


console.log("\nTest 2\n")
//* functionality 2

var y=5;
console.log("Initially :"+y);
test2();
console.log("After coming out of function :"+y);


function test2(){
    y=4;
    console.log("Inside function test 1: "+y);
}
//? Example of hoisting in JS is that we can call/invoke a function from anywhere even before declaring it

//? We can call the variable also before declaring/ declaring and assigning value to it , we won't get error
//? but we'll get undefined as value of that variable

//todo: Reason for hoisting in js :
//todo: As learnt in execution stack , when we run a js program- js skims down all the code in a program 
//todo: and allots memory for all the variables and functions in a program. thus we can invoke a function/variable from anywhere in js without error
 


abc();
console.log(x);
var x=9; //or //var x;

function abc(){

console.log("Hello guys")

}
//* Default Value of Variable just after declaring it and withous assigning any value is undefined
//! undefined: Value of variable when you call/use it before assigning value to it
//! not defined: Value of variable when you call/use it without declaring that variable anywhere in the program
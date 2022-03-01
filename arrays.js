
// It is a common practice to declare arrays with the const keyword.

// The keyword const is a little misleading.

// It does NOT define a constant array. It defines a constant reference to an array.

// Because of this, we can still change the elements of a constant array but not redeclare the whole array.
// Redeclaring an array declared with var is allowed anywhere in a program:
//Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed

//? https://www.w3schools.com/jsref/jsref_obj_array.asp

//* 2 ways to declare a new array:

const array1=[];
const array2=new Array();

array1[0]="bmw";
array1[1]=2;

array2[0]="hello";
array2[1]=true;

console.log(array1);
console.log(array2);

//Arrays are Objects, Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

console.log("Size of array is "+array1.length);

//to sort the array:
array2.sort();

//to add elements at the end 
array1.push("testman","testman2");

//to remove element at the end
array1.pop();

console.log(array1);
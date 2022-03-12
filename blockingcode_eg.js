
var fs = require("fs");
var data = fs.readFileSync('test.txt');

console.log(data.toString());
//Any Code after this will be blocked till data.toString() is available and  executed

console.log("Program Ended");

//to check output node blockingcode_eg.js

//Thus, a blocking program executes very much in sequence. 
//From the programming point of view, it is easier to implement the logic but
//non-blocking programs do not execute in sequence. In case a program needs to use any data to be processed,
// it should be kept within the same block to make it sequential execution.
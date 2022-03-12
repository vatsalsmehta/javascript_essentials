var fs = require("fs");

fs.readFile('test.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");

//Here there's no blocking ie. until data is getting processed to string , the next line will run ie.program ended wala line

//to check output node callback_nonblockingcode_eg.js
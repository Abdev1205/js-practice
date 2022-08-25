// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section 
// new Date(date string)



// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

let currDate = new Date();
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());

// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC


console.log(Date.now());    //1661277966249 is output

// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11. // indexing method is followed 

var d = new Date(2022,7,24,9,45,58,23);
console.log(d.toLocaleString());

// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string

var d = new Date("August 24, 2022 9:56:00");
console.log(d.toLocaleString());

// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:


var d = new Date(0);

var d = new Date(1661315307822);

console.log(d.toLocaleString());

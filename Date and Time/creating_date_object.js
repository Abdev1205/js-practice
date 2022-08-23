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
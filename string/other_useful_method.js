//👉  Other useful methods 

let myName = "Abhay Mishra";
console.log(myName.toUpperCase()); 
console.log(myName.toLowerCase());

// The concat() Method 🙋‍♂️
// concat() joins two or more strings

let fName = "Abhay"
let lName = "Mishra"

console.log(fName + lName );
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" " ,lName));






// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both 
// sides of a string

var str2 = "              Abhay         Mishra            ";
console.log(str2.trim());







// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

var txt = "a, b,c d,e";   // String
console.log(txt.split(","));           // Split on commas
console.log( txt.split(" "));          // Split on spaces
console.log(txt.split("|"));         // Split on pipe
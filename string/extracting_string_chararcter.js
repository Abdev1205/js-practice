//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

let str = "HELLO WORLD";

console.log(str.charAt(9));

// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



var str1 = "HELLO WORLD";

console.log( str1.charCodeAt(0) );

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

var str4 = "HELLO WORLD";
console.log(str4[1]);
// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).
// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.

var str = "Apple, Bananaa, Kiwi, mango";
var str1 = "Apple, Bananaa, Kiwi, mango";

// let res = str.slice(0,4);
let res = str.slice(7);
console.log(res);
console.log(str1.slice(7,-2));

// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

// // If we give negative value then the characters are
//  counted from the 0th pos 

var str1 = "Apple, Bananaa, Kiwi";
let res1 = str1.substring(8,-2);
console.log(res1);

// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


let str2 = "Apple, Bananaa, Kiwi";
let myres = str2.substr(7,-2);
let myres2 = str2.substr(-4);
console.log(myres);
console.log(myres2);


/*  1. Why do we need map() method in array crud operation
----> return element for newArray, after executing something  // this is bap of for loop 😇
----> Returns a new array containing the results of calling a 
// function on every element in this array.  

 */



//  1: Find the square root of each element in an array?
//  let arr = [25, 36, 49, 64, 81];

//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?
//     let arr = [2, 3, 4, 6, 8];

console.log();
console.log(`Solution - 1`);
console.log();
let arr=[25,36,49,64,81];
const sqr=arr.map((currElm)=>{
    return Math.sqrt(currElm)

})
console.log(sqr);

console.log();
console.log(`Solution - 2`);
console.log();
let arr1=[2, 3, 4, 6, 8];

const add = arr1.map((ele)=>{
    return ele*2; 

}).filter((ele)=>{     // this is chaining method /style used for shorting code 
    return ele>10;

})

console.log(add);
console.log();
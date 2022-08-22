/*  1. Why do we need reduce() method in array crud operation
----> flatten an array means to convert the 3d or 2d array into a  single dimensional array 
----> The reduce() method executes a reducer function (that you provide) 
      on each element of the array, resulting in single output value.

----> The reducer function takes four arguments:

//    Accumulator
//    Current Value
//    Current Index
//    Source Array
  

 */

console.log();
let arr1=[2, 3, 4, 6, 8];

const add = arr1.map((ele)=>{
    return ele*2; 

}).filter((ele)=>{     // this is chaining method /style used for shorting code 
    return ele>10;

}).reduce((Accumulator,ele)=>{   // this helps tp find average,sum of no in easy way
    return Accumulator +=ele

})

console.log(`sum of all no is ${add}`);
console.log();
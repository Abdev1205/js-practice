/*  1. Why do we need push() method in array crud operation
----> it is used to add one or more element at the end of the array 
----> it return new length of array 

 */
//ex 

const stationaryShop =['pen','pencil','book','copy','bag','water bottle','tiffin'];
// Now i want to add reference book /sample paper 
const pushElement =stationaryShop.push('reference book','sample paper'); // don't use function here 😤
console.log(stationaryShop);   // here output is added array 
console.log(`length of given array is ${stationaryShop.length-1}`);

/* 
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  
  
*/
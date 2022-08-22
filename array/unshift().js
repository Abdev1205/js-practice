/*  1. Why do we need unshift() method in array crud operation
----> it is used to add one or more element at the first of the array 
----> it return new length of array 

 */
//ex 

const stationaryShop =['pen','pencil','book','copy','bag','water bottle','tiffin'];
console.log(`length of given array before adding is ${stationaryShop.length-1}`);
// Now i want to add reference book /sample paper 
const pushElement =stationaryShop.unshift('reference book','sample paper'); // don't use function here 😤
console.log(stationaryShop);   // here output is added array in which element is added at begging of the array  
console.log(`length of given array after adding is ${stationaryShop.length-1}`);

/* 
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  
  
*/
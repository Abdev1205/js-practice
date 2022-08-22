/*  1. Why do we need splice() method in array crud operation
----> it is used to add/delete element of the array 
----> it return new length of array 

 */
/* # solve question using splice() method only 

   1: Add Dec at the end of an array?
   2: What is the return value of splice method?
   3: update march to March (update)?
   4: Delete June from an array?

   const months = ['Jan', 'march', 'April', 'June', 'July'];
*/
console.log();
console.log('solution -1');
console.log();
const months = ['Jan', 'march', 'April', 'June', 'July'];
console.log(months);
const newMonths=months.splice(months.length,0,"Dec")
console.log(months);
console.log();

console.log("solution -2");
console.log();
console.log(newMonths);
console.log();
console.log("solution -3");
console.log();
const index =months.indexOf('march')
if(index!=-1){
    const updateMonths =months.splice(index,1,"March")
    console.log(months);

}
else{
    console.log(`Unable to update because this element doesn't exist in array`);
}
console.log();
console.log("solution -4");
console.log();
const getIndex =months.indexOf("June")
if(getIndex!=-1){
    const deleteMonths =months.splice(getIndex,1,)
    console.log(months);
    console.log();

}
else{
    console.log(`Unable to update because this element doesn't exist in array`); 
}



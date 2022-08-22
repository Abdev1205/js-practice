/*  1. Why do we need findIndex() method in array searching
----> it return found element's index no 
----> It shows -1 when no element where found 
----> It only return single value this is big problem 

 */
//ex 

const prices =[100,200,300,400,450,500,550,600,650]

const findElement =prices.findIndex((currVal)=> currVal<900

)
console.log(findElement);   // here output is 0 

/* ----> IMP if output is -1 then it means no result found
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  -----> It search from first to last
  
*/
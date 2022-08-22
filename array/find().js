/*  1. Why do we need find() method in array searching
----> it return found element in array if element satisfies the finding condition 
----> It shows undefined when no element where found 
----> It only return single value this is big problem 

 */
//ex 

const prices =[100,200,300,400,450,500,550,600,650]

const findElement =prices.find((currVal)=>{
    return currVal<900

})
console.log(findElement);   // here output is 100 but we are expecting 100,200, 300 this is biggest drawback of using find() method

/* ----> IMP if output is -1 then it means no result found
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  -----> It search from first to last
  
*/
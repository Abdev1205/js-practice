/*  1. Why do we need filter() method in array searching
----> it return all found element which satisfies calling function 
----> It shows empty array when no element where found 
----> It return all element 

 */
//ex 

const prices =[100,200,300,400,450,500,550,600,650]

const filterElement =prices.filter((element,index)=> element<300 

)
console.log(filterElement);   // here output is 0 

/* 
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  -----> It search from first to last
  
*/
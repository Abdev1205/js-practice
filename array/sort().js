/*  1. Why do we need sort() method in array searching
----> it is used to get sorted array 
----> Every element is converted to string and then sorted 
----> it convert every element to string so many time it give wrong answer 
----> ex :- according to sort method 25 is greater than 100 🤣

 */
//ex 

const prices =[100,200,300,400,450,500,550,600,650]

const sortElement =prices.sort(()=>{
    
})
console.log(sortElement);   // here output is sorted array in ascending  order

/* 
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  -----> It search from first to last
  
*/
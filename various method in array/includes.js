/*  1. Why do we need includes() method in array searching
----> it used for finding value of searching element whether it is present or not

 */
//ex 

let subject =['Ei','HCI','COA','Differential','Discrete','COA','DLD']
console.log(subject.includes("COA"));
console.log(subject.includes('Coa',));  // giving parameter from which index value it should searching 

/* ----> IMP if output is -1 then it means no result found
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  -----> It search from last to first
  -----> It return true or false means boolean output only 
*/
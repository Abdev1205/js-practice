/*  1. Why do we need last index of method in array searching
----> it used for finding greatest index of searching element

 */
//ex 

let subject =['Ei','HCI','COA','Differential','Discrete','COA','DLD']
console.log(subject.lastIndexOf("COA"));
console.log(subject.lastIndexOf('Coa',));  // giving parameter from which index value it should searching 

/* ----> IMP if output is -1 then it means no result found
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  -----> It search from last to first
*/
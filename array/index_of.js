/*  1. Why do we need index of method in array searching
----> it used foe finding index of searching element

 */
//ex 

let subject =['Ei','HCI','Differential','Discrete','COA','DLD']
console.log(subject.indexOf("COA"));
console.log(subject.indexOf('Coa'));  // giving parameter from which index value it should searching 

/* ----> IMP if output is -1 then it means no result found
  -----> It is case sensitivity
  -----> It follows  camel case where every word start with capital letter 
  -----> It search from first to last 
*/

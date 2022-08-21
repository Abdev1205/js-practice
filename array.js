/*  1. why do we need array 
----> if we want to store many data in single variable so we have to use array 
    2. how to identify array from other data types 
----> We use [ ] square bracket to represent ut and separated by , and followed by ' '
    3. How can we print any element from the array 
----> We have use indexing method and we know that index start from 0 to n-1
*/

// ex of array 
cricketer =['sachin tendulkar','Virat Kohli','ravindra jadeja',12,78]
for(i=0;i<cricketer.length;i++){
    console.log(`My ${i+1} favorite cricketer is ${cricketer[i]}`);

}
console.log(`length of this array is ${cricketer.length-1}`); // here we have to subtract 
//1 because length start from 1 but indexing start from 0 


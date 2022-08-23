// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

const myBiodata="I am full stack developer"
const replaceData =myBiodata.replace('full','MERN');
console.log(`Original Bio data is ${myBiodata}`);
console.log(`Modified Bio data is ${replaceData}`);



// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive.
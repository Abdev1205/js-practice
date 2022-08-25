const curDate = new Date();

// // how to get the indivisual date 
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); // 0-11 jan to dec
console.log(curDate.getDate());
console.log(curDate.getDay());

// // how to set the indivisual date 

console.log(curDate.setFullYear(2022));
// The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 10, 5));
let setmonth = curDate.setMonth(10); // 0-11 jan to dec
console.log(setmonth);
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());
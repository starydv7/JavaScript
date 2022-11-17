//check string and number
let a = [20];
let b = ["20"];
console.log(a[0] == b[0]);
console.log(a[0] === b[0]);

//check object

let obj1 = [];
let obj2 = [];
console.log(obj1 === obj2);

// find 2nd element in array
let arr = ["Pawan", "Yadav", "ams"];
let [, y] = arr;
console.log(y);
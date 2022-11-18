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

//tricky
const name = "Code by Pawan";
console.log(!typeof name === "object");
console.log(!typeof name === "string");
console.log(!typeof name === false);
let name2 = "Pawan";
let age = 24;
console.log(isNaN(name2));
console.log(isNaN(age));

//modify after seal
//we can only modify present object after seal;
let person = { name: "Pawan" };
Object.seal(person);
// person.age = 23;
 person.name = "Yadav";
console.log(person);

//remove 1st element from array
//shift
var arrData = [2, 5, 7, 9, 2, 22, 8, 5, 3, 2, 7, 9, 3];
arrData.shift();
console.log("Remove 1st element from array", arrData);
//remove duplicate from array
let newArr = new Set(arrData);
console.log("Remove duplicate from array", newArr);
//double this array
// let doubleArray=arrData.map((el) => {
//     el * 2;
// })
// console.log("Double with Map",doubleArray);
//unshift to remove last element of array
let unshiftArr = arrData.unshift();
console.log("Remove last elemt from array", unshiftArr);


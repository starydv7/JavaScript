//check string and number
let a = [20];
let b = ["20"];
console.log(a[0] == b[0]);//true
console.log(a[0] === b[0]);//false

//check object

let obj1 = [];
let obj2 = [];
console.log(obj1 === obj2);

// find 2nd element in array
let arr = ["Pawan", "Yadav", "ams"];
let [,y] = arr;
console.log("resulr",y);

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
let unshiftArr = arrData.pop();
console.log("Remove last elemt from array", unshiftArr);
//check any element odd or even
let arrNum = 38;
console.log(a % 2);

// delete an property from object
let data = {
    name: "Anil",
    age:24,
}
// delete data.name;
delete data.name;
console.log(data);

//convert data to boolean false value

let data2 = "true";
console.log(typeof !data2);
console.log(!data2);

//conver data to boolean true value
console.log(!!data);


// forEach and map differences
// map return new array but forEach can manipulate the original data but map return new array


//delete from arrray number wise

let data3 = ["Pawan", "Yadav", "Csex"];
delete data3[1];
console.log("Delete data from Array", data3);
delete data3[2];
console.log(data3);

//merge two array

var arr1 = [2, 3, 5, 6, 7, 8, 9];
var arr2 = [5, 444, 4, 3, 2, 2, 1, 6, 6, 7, 8, 9, 10];
let finalArr =[...arr1,...arr2];
console.log(...arr1, ...arr2);
console.log(finalArr);

console.log(null == undefined);
var x = 9;
var y2 = "6";
console.log(x - y2)
function demo() {
    let dept = "EDTA"
    console.log(dept);
}
let dept = "FASDM";
demo();
console.log(dept);
var object = {
    name: "Aditya",
    getName: function () {
        console.log(this.name);
    }

}
var getName = object.getName;
var object2 = { name: "Not Aditya", getName };
object2.getName();

let x2 = [1, 2, 3];
var y2 = [4, 5, 6];
const combinedArray1 = [...x2, ...y2];
console.log(combinedArray1);
//b
let z = [3, 4, 5, 6];
const combinedArray2 = [1, 2, ...z];
console.log(combinedArray2);
//c
let c = [3, 4, 5, 6];
const combinedArray3 = [1, 2, ...a];
console.log(a);
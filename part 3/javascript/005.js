console.log("Here we know about arrays in Javascript...");

const marks = [21, 54, 96, 87, 36, 85, 4, 54];
const fruits = ["orange", "apple", "guava", "maple"];
const mixed = ["str", "56", "45", [3, 8, 25]];

const arr = new Array(46, 955, 12, "orange");
console.log(arr);
console.log(fruits);
console.log(mixed);
console.log(marks);
//   in most of programming language, numbering stasting from 0(zero).
console.log(fruits[0]);
console.log(fruits[3]);
console.log(mixed[3]);

console.log(arr.length);
console.log(Array.isArray("arr"));

arr[5] = "dodo";
arr[4] = 56;
arr[2] = "hahahaa";
let arrelement = arr[2];
console.log("element:", arrelement);
console.log(arr);

let valu = marks.indexOf(85);
console.log(valu);

// Mutating and Modifying Arrays

let points = [54, 55, 95, 98, 75, 88, 65, 45];
console.log(points);
points.push(456); // add elements from end.
console.log(points);
points.unshift(25, 5, 89, 36); // add elements from starting.
console.log(points);
points.pop(); //  remove elements from end .
console.log(points);
points.shift(); // it remove elements from starting.
console.log(points);
points.splice(2, 3);
console.log(points);
points.reverse();
console.log(points);
let points2 = [0, 1, 2, 3, 6, 9];
points = points.concat(points2);
console.log(points);

// note : these method change the original Array  , as we see............earlier it was [54,55,95,98,75,88,65,45]     ,and   now it is       now it is [45,65,88,75,98,95,89,5]

let myobj = {
  "first name": "ajeet",
  "last name": "Kumar",
  website: "currently on work",
  isActive: false,
  steps: [5, 4, 62, 32, 78],
};
console.log(myobj);
console.log(myobj.isActive);
console.log(myobj["last name"]);
console.log(myobj.website);

// const aaa = new Array(2211,5,4,5,1,2,'goos')
// console.log(aaa[3])
// aaa[1] = 45
// console.log(aaa)
//  console.log(aaa.length)
//  console.log(Array.isArray(aaa))

//  let airelement = aaa[1];
//  console.log(airelement);
//  console.log('element:', airelement)

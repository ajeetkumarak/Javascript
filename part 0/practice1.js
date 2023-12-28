const a = [1, 5, 81, 9, 3, 6, 4];

a.push(45);
a.shift();
a.unshift(52, 52, 24, 89);
a.pop();
a.reverse();

console.log(a.map((n) => n * 100));
console.log(a.reduce((acc, cur) => acc + cur));
console.log(a.includes(52));
console.log(a.filter((n) => n % 4 === 0));
console.log(a);

console.log(a.every((x) => x < 90));
console.log(a.every((x) => x < 53));

console.log(a.some((x) => x > 4));
console.log(a.findIndex((n) => n % 2 !== 0));

const c = ["a", "b", "c", "d", "e"];
console.log(c);
c.push(2);
console.log(c);

console.log(c.slice(3));
// console.log(lastIndexOf(c))
const d = [9, 8, 7, 6, 5, 4];
console.log(d.map((n) => n * 10));

// var username = prompt()
username = 54
username="asdfr"
console.log(username);

var age = 5
console.log(age)
console.log(age)
console.log(age)

var count;
count = 50;

var newcount = count

var message = "newcount = "+ newcount
console.log(message)


//  IIFE, Scope, and Window Object

// Always avoid the global object

// (function(){
// //  IIFE - immediately invoked function expression
// var letter = 5;
// })();

// javascript engines are -----
/*      v8 - Google chrome engines
        spiderMonkey - firefox
        shakara - microsoft edge
        many more javascript Engines............
*/ //                               All based on ECMA script
//                                   Test 262      TC-39
//                                  JIT  - Just in time compilation

// Global And Local variables


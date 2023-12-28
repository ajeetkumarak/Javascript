// function name () {
//       var fullname = "Ajeet Singh";

//       return fullname;
// };

// function sname (){
//       var lastname = "javascript Console"

//       function concat ( sname )
//       {
//         return "Mr." + lastname;

//       }

//       return lastname;
// };

// function name () {
//     var fullname = "Ajeet Singh";

//     function concat (name) {
//         return "Mr." + name;
//     }

//     // return fullname;
//     return concat(fullname);
// };

// function comp ( fullname ={firstname:"ankit ", lastname:"singh"})
// {
//     return fullname.firstname + fullname.lastname;
// }
// console.log(comp());

// function runExpression(){
// var a = 10;

// function add(){

// var b= 50;
//     return a + b;
// }

// return add();

// }

//    object literals for creating objects......
let car = {
  name: "maruti 700",
  speed: 100,
  run: function () {
    console.log("car is running");
  },
};

// Constructors
//  creating constructors for cars
function GeneralCar(givenname, givenspeed) {
  this.name = givenname;
  this.speed = givenspeed;
  this.run = function () {
    console.log(`${this.name} is running.`);
  };

  this.analyze = function () {
    console.log(`this car is slower by ${200 - this.speed}Km/h than mercedes.`);
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("alto", 150);
car3 = new GeneralCar("mercedes", 200);

console.log(car1);
console.log(car1.speed);
console.log(car1.run);
console.log(car2);

// we make  objects from object literals...     prototypes already available...
let obj = {
  name: "harry",
  channel: "code with me",
  address: "mars",
};
console.log(obj);
function Obj(givenname) {
  this.name = givenname;
}

Obj.prototype.getName = function () {
  return this.name;
};
Obj.prototype.setName = function (newName) {
  this.name = newName;
};

let obj2 = new Obj("harry");
console.log(obj2);
console.log(obj2.toString());

//  PROTOTYPES are just shared objects, they allow you to share properties and methods across a range of objects.
// The prototype object is attached to the callable object that is the constructors.
// When we construct an object from the constructor it is automatically linked to that callable object.i.e. prototype objects
//
function Apple(color, weight) {
  this.color = color;
  this.weight = weight;
  // this.eat = function(){return "eat Appple"}
  // this.throw = function(){return "throw Apple"}
}

Apple.prototype = {
  eat: function () {
    return "you can eat Apple";
  },
  throw: function () {
    return " you can't eat, throw Apple";
  },
  //  plastic : function(){return "this Apple is made of plastic garbages i.e.it's show piece"}
  plastic: function () {
    return this;
  },
};

var apple1 = new Apple("red", 100);
var apple2 = new Apple("green", 150);
var apple3 = new Apple("sweetred", 80);
var apple4 = new Apple("yellow", 50);

console.log(apple3.throw());

// using prototype we can change function easily...
Apple.prototype.eat = function () {
  return "Apple should eat as soon as possible.";
};
// and, it change for all the variables at once...
Apple.prototype.throw = function () {
  return "these apples are bad, you should not eat.";
};
console.log(apple4.throw());
console.log(apple2.eat());
console.log(apple2.plastic());

// COMPARISON OPERATORS
// firstly,  WE have "double equals comparison operator"
//  it compare what is to left of it and what is to the right of it.
//   comparison operators always returns a "boolean value"
console.log(10 == 10);

console.log(20 == 52);

console.log(20 == "twenty");

console.log("hello" == "hello ");

console.log("hello" == "Hello");

console.log(10.23 == 10.24);

console.log(null == null);

console.log(undefined == undefined);

console.log(true == true);

console.log(false == true);
//   very careful here ,
//  NaN is a primitive data type, However it doesn't actually compare.
// so, NaN is not equal to NaN
console.log(NaN == NaN);
//  Never use NaN with comparison operators

//  ****** POLYMORPHISM    **********
//         it is lika Play-Doh
//             it's changeable & it's adaptable
// We had a look at the plus operator when we said right OK 10 plus 10.
console.log(10 + 25);
// add the values together so we're going to get 35.

//  now,
// For example we've got two different data types now.
// The integer 10 plus & string 10.
// Well that can't return an expression value.
console.log(10 + "25");
// It actually returns a concatenation So what it did was it said right.
// This is a number but strings take precedence because strings can contain numbers and letters so what
// it did was it took the integer and it changed it into the string data type
//   so, it's concatenating those two strings 10 ans 25 together producing "1025"

console.log(null == undefined);
//  it recognized that "null" is a kind of like" undefined" & both mean the same type of things
//  it's just polymorphs.

console.log(10 == "10");
//  it gives true, because.....
// Now what happens is if there is a string either to the left or to the right of this comparison operator
// a string always takes precedence.
// Why.
// Because strings can contain numbers and letters so you can so you can turn an integer into a string
// but you can turn a string into an integer or a number.
// So that's what we're doing here is it's polymorphism is changing the data type of that number and it's
// converting it into the string data type and comparing it.
// So it's literally the string turn is equal to the string 10.

// ****so, to prevent this from happening what we can do is use the "triple equals sign"...
//  ****** Triple equals operators
console.log(null === undefined);
console.log(10 === "10");
//  are different data types.

// So now when I ask it is null equal to undefined it returns false because it's not only checking the value
// and it's not trying to change the value or the data type is leaving the data types alone it's leaving
// the values alone and it's doing the comparison.
// There's no polymorphism with a triple equals they are not equal to one another.
// And likewise the number 10 is not equal to the string 10 in this case because there's no polymorphism.
// This is a number data type and this is a string data type and therefore it's false.

//   ****** not operator (not equal to)
console.log(null != null);

console.log(null != undefined);

console.log(10 != 100);

console.log(10 != "10");
// So there's polymorphism happening here because we have the string 10 and we have the number data type 10.

// So again to prevent this we need to use the IS NOT operator with an extra equal sign.
// *****   IS NOT Operator   has extra equal sign.

console.log(10 !== "10");
// So if you add that extra equal sign in there it's now going to check the value and it's not going to change the data type.
console.log(null !== undefined);

console.log(10 < 52);
console.log(52 > 65);
console.log("Hello" > "hello");
console.log("Hello" < "heloooo");
console.log(10 > 10);
console.log("hellooo" > "hello");
console.log(10 >= 10);
console.log(10 <= 10);

console.log("hello" > "hello");
console.log("helloooo" > "hello");
console.log("Helloooo" > "hello");
// it is not good in comparing strings

//*******    we have        ==   ===   !=   !==   >   <   >=   <=

var carsleft = 0,
  //  carsright = 0,
  // greenman = "yes"
  greenman = "no";
//  carsleft = 1,
carsright = 1;

if (greenman === "yes") {
  console.log("cross the rod now.");
}
// else if (carsleft === 0 && carsright ===0)
//  {
//      console.log("All clear: cross the Road")
// }
// else if(carsleft ===0 || carsright ===0)
// {
//      console.log("one way is clear & wait for anotherone to clear")
// }
else if (greenman === "no" && (carsleft === 0 || carsright === 0)) {
  console.log("Run Anyway");
} else {
  console.log("Don't cross the road");
}

console.log(`**********++-+-+-********`);

//   *****     For and For in loops
var classregister = ["Ajeet", "John", "Kumar"];
console.log(classregister[0]);
console.log(classregister[1]);
console.log(classregister[2]);

// increment elments in array
for (var j = 0; j < classregister.length; j++) {
  console.log(classregister[j]);
}

//  deincrement elements through the elements in Array
for (var i = classregister.length - 1; i >= 0; i--) {
  console.log(classregister[i]);
}

//*  for in loops
for (var index in classregister) {
  console.log(classregister[index]);
}

//*  ECMAScript version 6 or javascript version
// this version allow you to define a new way to create a variable.
//  let & const
//  they allow to address values stored in memory.
// * LET has more respect for SCOPE

var symbolName = "value reference in memory";

let letSymbol = "Scoped value";

const symName = "Constant value in memory";
/*
     in console,
     letSymbol;
     we get value......
     
     * we can assign new values of LET & var symbols in console...
     letSymbol = "good to be a scoped value";
     * it will changes

*   We cannot assign new values with constant symbols(const)
  
  */

if (true) {
  var Name = "value reference ";
  /* 
*   in console, 
                Name;
                window.Name;
 *     we get results
 *               
*/
  // It actually allows me to pull out that value from memory but that shouldn't have happened because thisis the scope here that is the scope.
  // That's not the window object.
  // And what it did was it went out of that scope and it actually attached that symbol name to the window object and that's very bad because we're adding a global variable here.
  // And you could have all sorts of problems in naming collations I could have another statement down my script using the same symbol name thinking that the variables respect the scope but variables don't respect conditional execution context such as if statement execution context.
  // * Variables (var) don't respect conditional execution context such as if statement execution context

  let letName = "Scope is exist";
  /* 
*   in console, 
                letName;
 *               we get error..
*/
  // sorry, it's not defined.
  // So the let symbol was defined within these braces and they are scoped it respected the block level scope.
  // You also have a constant you can also think of this as a block a block of commands that were placing together asking to execute it in and respects that block.

  const cName = "Also here scope is exist";
  /*
*    Constant also respect the scope of this conditional execution context 

*/
}

// *If you want to respect the scope and also don't forget you also have other types of execution contexts

for (var k = 0; k < 5; k++) {
  var Name = "value reference ";

  let letName = "Scope is exist";

  const cName = "Also here scope is exist";
}
//     replace var with let..__ __ __ ___ _
// *    Now i use let in for loop
for (let n = 0; n < 5; n++) {
  var varalpha = "value reference ";

  let letbeta = "Scope is exist";

  const congamma = "Also here scope is exist";
}

function check() {
  var varfunction = "assign a value";
}
/*
You'll also get the  error.
* Variables respect only functions
So variables respect only the scope of a function's execution context but it does not respect anything

to do with for loops or if statements when it comes to that.
*/

//  *    DOM  Document Object Model

// document.querySelectorAll('#para');
// document.querySelectorAll('.pclass');
// document.querySelectorAll('#hello');

let asx = document.querySelectorAll(
  ' p[data-content="000"], body > h1.heading > span'
);
console.log(asx);

let hello = document.getElementById("hello");
// console.log(hello);
hello.innerText = "it's new world";
console.log(hello);
hello.innerText += " of coders <b>programmer</b>";
console.log(hello);

console.dir(document);
//  in console, dir(document)

hello.innerHTML = `<h2 class="header"> it's innerHTML</h2>`;
hello.outerHTML = `<h6>it's outerHTML <span> udemy is future.</span></h6>`;
console.log(hello);

//  how to select span tag
var h6span = document.querySelector("h6 span");
h6span.innerHTML = "new text here";
console.log(h6span);
console.dir(h6span);

var h1span = document.querySelectorAll("h1 span")[0];
h1span.innerHTML = "new script here";
console.log(h1span);

// * Styling the elements using js

let header = document.querySelector(".heading");
// header.style.background = "darkblue";
// header.style.color= "silver";

header.style.cssText = "background:yellow; width:300px";
header.style.cssText += "height:100px; color:silver ";

var pclass = document.querySelector(".pclass");
pclass.style.color = "yellow";

let lass = document.getElementById("para");
lass.style.color = "yellow";

// let zzz = document.getElementsByClassName('graph')
// zzz.style.color = "green"

// * in javascript we can able to access predefined or computed styles that we put in css file
// we can do  this as follow:==

var computedstyle = document.getElementById("style");
computedstyle.style.cssText = "background:lightblue ";
console.log(computedstyle);
console.log(getComputedStyle(computedstyle));

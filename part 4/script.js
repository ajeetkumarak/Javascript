// console.time('your code take time')

// console.log('hello console, welcome back to work in js.');
// console.log(45/56+1);
// var x = "revision ";
// console.log(x);
// console.timeEnd('your code take time');
// let arr2
// let arr = [53,65,23,65,84]
// arr2 = [12,22,45,45,96,76,85];
// console.log(arr2.length)
// arr2.includes(90)
// console.log(arr2.push(100));
// arr.push(09)
// console.log(arr)

// {
//     let city = 'jersey'
//     console.log(city)
//     city = 'new york'
//     console.log(city)

// }
// // console.log(city)

// var name = `ajeet`
// var channel
// var marks
// console.log(name)
// channel = `codewithaj`
// marks = 890
// // channel = `codegoogle`
// // marks = 900
// console.log(name,channel,marks)
// // alert("good morning");
// console.error("not loading")
// console.warn('bakwaas website hai.')
// console.log({harry:'this',marks:90} )
// console.table({harry:'this',marks:90} )
// console.log(true)
// console.assert(180<180,'Age <180 is not possible.');

// let age = 900
// if (age<100) {
//     console.log('you are allowed Here')
// }
// else{
//     console.log('not allowed')
// }

/*

// primitive data types in js.
// 1.string
let area = "earth"
console.log("my string is "+area);
console.log("datatype is "+(typeof area))

// 2.Number 
let no = 898
console.log(no)
console.log("datatype is " +(typeof no))

let mark = "456"
console.log("datatype is "+(typeof mark))

// 3.boolean
let driver = true
console.log(driver)
console.log("datatype is "+(typeof driver))

let pilot  = "false"
console.log(pilot)
console.log("datatype is "+(typeof pilot))
 
// 4.null
let nullvar = null
console.log(nullvar)
console.log("datatype is "+(typeof nullvar))

// 5.undefined
let undef = undefined
console.log(undef)
console.log("datatype is "+(typeof undef))


//    Reference datatype in js.
// 1.Arrays
arr = [1,2,5,9,7,"goat","52",[12,52,45],false]
console.log(arr)
console.log("datatype is "+(typeof arr))


// 2. Object literals
let stmarks ={
      harry:90,
      ajeet:89,
      ankit:98,
      'sandeep kumar':78,
      'mohan das':91
}
console.log(stmarks)
console.log("datatype is "+(typeof stmarks))

// 3.Function
function findname() {
    
}
console.log(findname)
console.log("datatype is "+(typeof findname))


// 4. date
let date = new Date()
console.log(date)
console.log("datatype is "+(typeof date))                   */

//             type conversion and type coercion
console.log("hello console");

/*  let myvar
 myvar = String(90)
console.log(myvar,(typeof myvar))

let booleanvar= String(true);
console.log(booleanvar,(typeof booleanvar));

let date = new Date()
console.log(date,(typeof date));

let ndate = String(new Date())
console.log(ndate,(typeof ndate))

let arr = [1,2,3,6,5,4,7,8,9]
console.log(arr.length,(typeof arr))

let arra = String([1,2,3,6,5,4,7,8,9])
console.log(arra,(typeof arra))
console.log(arra.length,(typeof arra.length))

let i =10;
console.log(i)
console.log(i.toString())        // number show in blue colors

let j = true
console.log(j)
console.log(j.toString())

let k = new Date()
console.log(k)
console.log(k.toString())
console.log(typeof k.toString())

let str = "5665"
console.log(str)
console.log(str.length)
console.log(typeof str)

let stri = Number("4545")
console.log(stri,typeof stri)

let strin = Number("45k56")
console.log(strin,(typeof strin))

let string = Number(true)
console.log(string,(typeof string))

let st = "4525"
st = Number("4525")
st = [1,2,5,9,8,7,3]
st = Number(false)
console.log(st,(typeof st))

//default behaviour for true is 1  while default behaviour for false is 0.

let number = 120.005;
console.log(number, (typeof number))

let n = '450.0021'
console.log(n, (typeof n))

let nu = parseInt('45.005') 
console.log(nu, (typeof nu))

let num = parseFloat('56.0054')
console.log(num, (typeof num))

let numb = parseFloat('56.021')
console.log(numb.toFixed(25), (typeof numb))

//  type coercion

let mystr = 562
let mynum = 258
console.log(mystr+mynum)


let yourstr ="900"
let yournum = 1000
console.log(yournum+yourstr)

yourstr = Number("900")
console.log(yournum+yourstr)


let bonumber = parseFloat("524")
console.log(bonumber.toFixed(20))                                   */

/*
const name = 'ajeetsingh'
const greet = 'good morning'
console.log(greet+name)
console.log(greet+" "+name)

let html;
html =  `<h1>Hello Universe</h1>`
console.log(html)
html = "<h1>Hello Universe</h1>"+"<p>this is my world.</p>"
console.log(html)
html = html.concat('this ','Earth')
console.log(html)
console.log(html.length);
console.log(html.toLowerCase())
console.log(html.toUpperCase())
// console.log(html)

console.log(html[0])
console.log(html[20])

console.log(html.indexOf('this'))
console.log(html.indexOf('Universe'))
console.log(html.indexOf('h1'))
console.log(html.indexOf('Earth'))
console.log(html.indexOf('ghty'))
console.log(html.lastIndexOf('<'))
console.log(html.charAt(21))
console.log(html.charAt(12))
console.log(html.charAt(4))

console.log(html.endsWith('Earth'))
console.log(html.endsWith('earth'))
console.log(html.includes('my'))
console.log(html.includes(' '))
console.log(html.includes('that'))

console.log(html.substring(1,20))
console.log(html.slice(26))
console.log(html.slice(0,6))
console.log(html.split(' '))


console.log(html.replace('this','that'))
console.log(html.replace('my','your'))



let fruit = 'apple'
let fruit0 = 'orange'
let myhtml = `Hello ${name}
               <h1>This is "my" html putting in js.</h1>
               <p>ypu like ${fruit} and ${fruit0}  </p>
`

// document.body,style.padding='20px'

document.body.innerHTML = myhtml

console.log(myhtml)
*/

/*
const fruits = ['mango','orange','grapes','apple','fig']
const marks = [56,52,98,87,42,96]
const mixed = [99,'pineapple',95,'apple','peas']

console.log(fruits)
console.log(marks)
console.log(mixed)
const arr = new Array(65,'amrud',52,97,'santara',94)
console.log(arr)
console.log(arr.length)
console.log(Array.isArray(arr))

// console.log(fruits[02])
// console.log(marks[3])
// console.log(mixed[4])

arr[5] = 55           // it replace the position
arr[3] = 'good'
arr[6] = 'bakwaas'
let goodelement = arr[2]
console.log('element:', goodelement)
console.log(arr)
let valu = marks.indexOf(96)
console.log(valu)


let number = [56,92,45,98,78,91,81,72,83,86,94];
number.push(99)
console.log(number)
number.reverse()
console.log(number)

number.pop()
console.log(number)
// number.unshift(1,2,3,4,5)
// console.log(number)
number.shift()
console.log(number)

let points = [9,8,7,6,5]
points = points.concat(number)
console.log(points)
points = number.concat(points)
console.log(points)

let myobj = {
     'first name' : 'ajeet',
      'last name': 'kumar' ,
      website : 'currently in process',
      isActive :false,
      age : '15+',
      steps : [1,2,3,5,9,11,15]
}
console.log(myobj)
console.log(myobj.isActive)
console.log(myobj['last name'])
console.log(myobj.steps)
console.log(myobj.age)
console.log(myobj.website)

const arra = new Array(45,65,12,2,98,78,'dodo')

console.log(arra[3])
arra[7] = 90
console.log(arra)
console.log(Array.isArray(arra))

let airelement = arra[2]
console.log(airelement)
console.log('element:',airelement)

*/

// const age = 57;
// if (age==50) {
//       console.log('age is 50.')
// }
//  else {
//      console.log('age is not 50.')
// }

// const number = 95
// if (number<90) {
//       console.log('age is less than 100.')
// }
// else if(number<100) {
//       'age is between 90 and 100.'
// }
// else {
//     console.log('age is more than 100.')
// }

// const sayhello = 415
// if (sayhello<45) {
//       console.log('call sayhello 40times')
// }
// if (sayhello>45) {
//       console.log('call say hello 50times.')
// }
// else{
//       console.log('call say hello 45 times')
// }

/*

 const age = 20
if (age==19) {
      console.log('age is 19')
}
 else if(age==56) {
      console.log('age is 56')
}
else{
      console.log('age is not 19')
}

const year = '2020'
if (year==='2020') {
      console.log('this is 2020')
} 
else if(year==2020) {
     console.log('this is 2020') 
}
else{
      console.log('this is not...')
}

const hum = 100;
if (hum != 100) {
      console.log('hum hi hai')
}
 else if(hum == 100) {
      console.log('hum nahi hai')
}
else{
console.log('to tum ho  yeh ')
}


const vari = 01101162622
if (vari) {
      console.log('variable is defined')
} 
else {
    console.log('variable is not defined')  
}

const variab = 2100;
if (variab !== 'undefined') {
      console.log('varible value is defined')
} 
else {
    console.log('variable value is not defined')  
}


const doesdrive = true
if (doesdrive && age>18) {
      console.log('congratulation, you can drive')
}
 else {
    console.log(`you can't drive.`)  
}

const pilot = false;
const passengers = 100;

if (pilot && age>26  || passengers > 99) {
      console.log('congratulation! you are ready for flight.')
} 
else {
    console.log('you are not ready to fly .') 
}

const yehh = 123;
console.log(yehh==12? 'yehh is 23' : 'yehh is not 23')

const fall = 145
console.log(fall==45? 'fall is 45' : 'fall is not 45');        //this is turnary operator.

const param = 100;
switch (param) {
      case 20:
            console.log('below 100')
            break;
      case 50:
            console.log('below 50')
            break;
      case 100:
            console.log('sahi jawab 5 crore')
            break;
      default:
            console.log('below 10')
            break;
}

for (let age = 0; age < 100; age++) {
      // const element = {age};
      console.log(age)
}


let j = 5
while (j<25) {
      console.log(j)
      j+=1
}

let k= 100;
do { console.log(k+1)
     k +=1 
} while (k < 120);

let y = 1;
do {  
      if(y===5){
            break;

      }
     console.log(y+1)
            y +=1
      

} while (y<20);

let n = 100
do {
      if (n === 120) {
           break; 
      }
      n +=1
      console.log(n+2)

} while (n < 150);

let a = 50;
do {
      if (a === 20) {
           a -=1 
            continue;
      }
      console.log(a-1)
      a -=1
} while (a > 1);

let c = 1000;
do {
      if (c === 1130) {
            c +=1
            continue;
      }
      console.log(c+5)
      c+=5
} while (c < 1100);

console.log('Task Completed')

let air = [1,2,3,6,5,4,9,8,7,11,22,66,99,88,77,55]
air.forEach(function (element, index, Array) {
      console.log(element,index, Array)
      console.log(element.length)

})

for (let index = 0; index < air.length; index++) {
      const element = air[index];
      console.log(element)
}

let yourobj = {
     'first name' : "ajeet",
     'last name' : "kumar",
     age : 25,
     type : 'dangerous engineer',
     os : "ubuntu"
}
for(let key in yourobj){
      console.log(`The ${key} of user is ${yourobj[key]}.`)
}

let india = {
      state :"bihar",
      district : "Rohtas",
      city : "Sasaram",
      area : "mahadiganj",
      working : "from home on pc"

}
for(let key in india){
      console.log(`........The ${key} of user is ${india[key]}........`)
}

let ray = [99,88,77,55,22,46,13,64,31,82];
ray.forEach(function (index, element,Array) {
      console.log(element,index,Array)
})



for (let d = 0; d < ray.length; d++) {
      const element = ray[d];
      console.log(element)
}

*/

console.log(`You’re always there to lift me up
And to gently warm my heart
You never seem to fail
In making me smile.
You’re the very best friend
Anyone could ever have
You’re my favourite girl
By a country mile.

Happy birthday to you, bestie.`);

let name = "skillF";
let name2 = "seven";

console.log(`Happy birthday ${name}, You’re always there to lift me up
And to gently warm my heart
You never seem to fail
In making me smile.
You’re the very best friend
Anyone could ever have
You’re my favourite girl
By a country mile.

Happy birthday to you, bestie.`);

console.log(`Happy birthday ${name2}, You’re always there to lift me up
And to gently warm my heart
You never seem to fail
In making me smile.
You’re the very best friend
Anyone could ever have
You’re my favourite girl
By a country mile.

Happy birthday to you, bestie.`);

function greet(name, thanks = "thank you") {
  console.log(` happy birthday ${name} You’re always there to lift me up
And to gently warm my heart
You never seem to fail
In making me smile.
You’re the very best friend
Anyone could ever have
You’re my favourite girl
By a country mile.

Happy birthday to you, bestie.
    {thanks}.`);
  return 5;
}
// let val = greet(name,'thanks a lot.')
// greet(name2)
// console.log(val)

function greet(name, thanks = "thank you") {
  let msg = ` happy birthday ${name}; You’re always there to lift me up
And to gently warm my heart
You never seem to fail
In making me smile.
You’re the very best friend
Anyone could ever have
You’re my favourite girl
By a country mile.

Happy birthday to you, bestie.
    ${thanks}.`;
  return msg;
}
let val = greet(name, (thanks = "thanks a lot."));
console.log(val);
val = greet(name2, (thanks = "thanks a lot ."));
console.log(val);

const mygreet = function (name, thanks = "thank you") {
  let message = ` happy birthday ${name}; You’re always there to lift me up
      And to gently warm my heart
      You never seem to fail
      In making me smile.
      You’re the very best friend
      Anyone could ever have
      You’re my favourite girl
      By a country mile.
      
      Happy birthday to ${name}.
          ${thanks}.`;
  return message;
};
let mai = mygreet(name2, (thanks = "thank you"));
console.log(mai);

const theirobj = {
  name: "ajeet singh",
  game: function () {
    return "GTA";
  },
};
console.log(theirobj.game());

arr = ["apple", "banana", "date", "fig", "grapes", "guavas"];
arr.forEach(function (element, index, Array) {
  console.log(element, index);
});

let kl = 500;
console.log(kl);
function ti(name) {
  let k = 400;
  console.log(k);
  return `this is the ${name}.`;
}
console.log(ti("ajeet"), kl);

let i = 214;
console.log(i);
function ui(name) {
  let i = 9;
  console.log(i);
  return `This is a ${name}.`;
}
console.log(ui("Afgaan jalebi"), i);

if (1) {
  var j = 100;
  console.log(j);
}
console.log(j);
function pi(name) {
  let j = 50;
  console.log(j);
  return `tis is the ${name}`;
}
console.log(pi("js"), j);

let a = window;
// console.log(a)
// window.alert("good morning")
// alert("jai JHind")
// window.prompt("this may kill you..")
// a = confirm("this is belong to you the boys..")
let b = window.document;
b = window.innerHeight;
b = window.innerWidth;
b = scrollY;
b = location;

console.log(b);

let c = window.document;
c = location;
c = location.toString();
c = window.history;

console.log(c);

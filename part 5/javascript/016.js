console.log(document.lastModified);
console.log("welcome to the study about MATH objects");
let a = 465;
let b = 535;
let z;
z = a + b;
z = a * b;
z = a / b;

console.log(z);

let c = b - a;
console.log(c);

// Exploring the math objects
c = Math;
c = Math.PI;
c = Math.E;
console.log(c);

let m;
m = Math.ceil(10.0000008);
m = Math.round(102.425415);
m = Math.floor(100.93);
m = Math.floor(-100.93);
m = Math.abs(52.01);
m = Math.abs(-52.23);
m = Math.sqrt(625);
m = Math.pow(9, 2);
m = Math.pow(-10, 5);
m = Math.min(2, 1, -6, 5, 9, 7, 3, 4);
m = Math.max(-52, 12, 99, 74, 0, 47);
console.log(m);

let y;
y = Math.random();

// a = (0,1)
// a100 = a*100 = (0 , 100);
// a10_100 = 10+a*(100-10)
y = 100 * Math.random();
y = 10 + Math.random() * (100 - 90);
y = 90 + Math.random() * (100 - 90);
// to get this in integers, we do  as follow__ ___ __ __ _
y = Math.ceil(50+Math.random()*(100-90));
console.log(y);

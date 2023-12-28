//  Type Conversion and Type Coercion

let myvar;
myvar = String(56);
console.log(myvar, typeof myvar);

let booleanvar = String(true);
console.log(booleanvar, typeof booleanvar);

let date = new Date();
console.log(date, typeof date);

let ndate = String(new Date());
console.log(ndate, typeof ndate);

let arr = [1, 5, 8, 6, 23, 2, 8];
console.log(arr.length, typeof arr);

let arr1 = String([1, 5, 8, 6, 23, 2, 8]);
console.log(arr1.length, typeof arr1);

let i = 8;
console.log(i);
console.log(i.toString());
// number shows in blue colour  (always)

let j = true;
console.log(j);
console.log(j.toString());

let k = new Date();
console.log(k);
console.log(k.toString());

let stri = "5665";
console.log(stri, typeof stri);

let strin = Number("6556");
console.log(strin, typeof strin);

let str = Number("5885");
str = Number("58g85");
console.log(str, typeof str);

let st = Number("5685");
st = Number(true); // default behavious i.e. gives 1
console.log(st, typeof st);

let gnirts = Number("4554");
gnirts = Number(false);
gnirts = Number([1, 5, , 8, 85, 88, 55, 5, 5]);
console.log(gnirts, typeof gnirts);

let number = 5.536;
console.log(number, typeof number);

let n = "580.00566";
console.log(n, typeof n);

let nu = parseInt("57");
console.log(nu, typeof nu);

let numb = parseInt(52.54455);
console.log(numb, typeof numb);

let num = parseFloat("54.130");
console.log(num, typeof num);

let numbe = parseFloat("25.055");
console.log(numbe.toFixed(30), typeof numbe);

// TYPE COERCION

let mystr = 752;
let mynum = 100;

console.log(mystr + mynum);

let yourstr = "752";
let yournum = 100;

console.log(yourstr + yournum);

let ystr = Number("752");
let ynum = 100;

console.log(ystr + ynum);

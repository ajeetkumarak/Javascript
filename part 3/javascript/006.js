console.log("hey there we are in part 006 of javascript.");

const age = 19;

if (age == 19) {
  console.log("age is 19");
} else if (age == 56) {
  console.log("age is 56");
} else {
  console.log("age is not 19");
}

const year = "62"; // it is string

if (year === 62) {
  console.log("you are in 62");
} else if (year === "62") {
  console.log("hello in 62");
} else {
  console.log("you are Not..");
}

const tum = 1;
if (tum == 1) {
  console.log("tum hi ho ");
}
if (tum != 1) {
  console.log("kya ho tum ?");
} else {
  console.log("hey you..");
}

const taj = 0;
if (taj == 1) {
  console.log("tum hi ho ");
} else if (taj != 1) {
  console.log("kya ho tum ?");
} else {
  console.log("hey you..");
}

////

const varia = 101;
if (varia) {
  console.log("variable is defined.");
}

const vari = 1010;
if (typeof vari !== "undefined") {
  console.log("vari is defined.");
} else {
  console.log("vari is not defined.");
}

const doesdrive = true;

if (doesdrive && age > 18) {
  console.log("Congratulations! you can drive.");
} else {
  console.log("you cannot drive.");
}

const pilot = false;
const count = 200;
if (pilot || count > 150) {
  console.log("flight is ready");
} else {
  console.log("flight is not ready yet.");
}

const fall = 145;
console.log(fall == 45 ? "fall is 45" : "fall is not 45"); //this is turnary operator.

//  switches in javascript....
const phase = 80;
switch (phase) {
  case 18:
    console.log("you are 18+");
    break;
  case 30:
    console.log("you are 28+");
    break;
  case 40:
    console.log("you are 38+");
    break;
  case 50:
    console.log("you are 48+");
    break;
  case 80:
    console.log("you are 78+");
    break;
  default:
    console.log("you are 18");
    break;
    break;
}

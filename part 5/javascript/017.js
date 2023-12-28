console.log('we here study about Date Object') ;
let today = new Date();
console.log(today);
console.log(typeof today);

//   this exist in format of  mm/dd/year

let otherdate = new Date('12-14-2003 04:59:58');
otherdate = new Date('june 15 1912');
otherdate = new Date('8/21/2004 09:59:58');
console.log(otherdate);

/*
sunday      0
monday      1
tuesday     2
wednesday   3
thrusday    4
friday      5
saturday    6
*/
let a;
a = otherdate.getDay()
console.log(a)

 let d ;
  d = otherdate.getDate()   //  gives the day
  d = otherdate.getHours()
  d = otherdate.getFullYear()
  d = otherdate.getMinutes()
  d = otherdate.getSeconds()
  d = otherdate.getTime()
  d = otherdate.getMonth()
  console.log(d)

  otherdate.setDate(25)
  otherdate.setMonth(11)
  otherdate.setFullYear(2022)

otherdate.setHours(12)
otherdate.setMinutes(54)
otherdate.setSeconds(59)

console.log(otherdate)
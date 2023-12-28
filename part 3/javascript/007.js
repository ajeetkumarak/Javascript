console.log("we are in part 007 of javascript , here we learn about loops in js.");
let d = 90;
 d +=1
 d++
console.log(d)


// loops in js....

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

// General loops: (1)for, (2)while, (3)do-while



// for(let a=0; a<101; a++  )
// {
//     console.log(a);
// }

// let j = 01;
// while (j<10) {
//     console.log(j);
//     j +=1
// }

// let k = 9;
// do{
//     console.log(k + 1);
//     k +=1
// }while (k<100) 
    

// let z = 0;
// do{
//     if(z===5){
//         break;
//     }
//     console.log(z+1);
//     z +=1
// }while(z<10)

// let m = 1;
// do{
//     if(m===13){
//         break;
//     }
//     m +=3
//     console.log(m+1)
//   }while(m<30)

let b = 0;
do{ 
    if(b===12){
        b += 1
        continue
    }
    console.log(b+1);
    b +=1
}while(b<20)



let c = 3;
do{
    if(c === 9){
        c +=2
        continue
        
     }
    console.log(c+2)
    c +=2
}while(c<20)

console.log("done");


let arr = [1,2,3,6,5,4,9,8,7,10,11,22,33,66,99];
arr.forEach(function( element, index, array) {
    console.log(element, index, array);
})

// for(let f = 0; f < arr.length; f++){
//     const element = arr[f];
//     console.log(element)
// }


// let obj = {
//     name:"rancho das",
//     age:45,
//     type:"dangerous engineer",
//     os:"Ubuntu"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is  ${obj[key]}`)
// }
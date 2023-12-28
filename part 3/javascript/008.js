console.log("we are in part 008 of javascript. ")
console.log(" here we learn about functions.")

// // console.log(`You’re always there to lift me up
// // And to gently warm my heart
// // You never seem to fail
// // In making me smile.
// // You’re the very best friend
// // Anyone could ever have
// // You’re my favourite girl
// // By a country mile.

// // Happy birthday to you, bestie.`)

let name = 'skillF';
// console.log(`Happy Birthday ${name}, You’re always there to lift me up
//     And to gently warm my heart
//     You never seem to fail
//     In making me smile.
//     You’re the very best friend
//     Anyone could ever have
//     You’re my favourite girl
//     By a country mile.
    
//     Happy birthday to you, bestie.`);

    let name2 = 'ajsk';
//     console.log(`Happy Birthday ${name2},You’re always there to lift me up
//         And to gently warm my heart
//         You never seem to fail
//         In making me smile.
//         You’re the very best friend
//         Anyone could ever have
//         You’re my favourite girl
//         By a country mile.
        
//         Happy birthday to you, bestie.`)
// ;

// it takes more lines of code
// hence we have function

// function greet(name, Thanks='thank you') {
//     console.log(`Happy Birthday ${name},You’re always there to lift me up
//         And to gently warm my heart
//         You never seem to fail
//         In making me smile.
//         You’re the very best friend
//         Anyone could ever have
//         You’re my favourite girl
//         By a country mile.
        
//         ${Thanks}`);
//         return 5;
// }
//  let val = greet(name, 'Thanks a lot.');
//    greet(name2)
// console.log(val);


// function greet(name, Thanks='thank you') {
//     let msg = `Happy Birthday ${name},You’re always there to lift me up
//         And to gently warm my heart
//         You never seem to fail
//         In making me smile.
//         You’re the very best friend
//         Anyone could ever have
//         You’re my favourite girl
//         By a country mile.
        
//         ${Thanks}`;
//           return msg;
// }
// let val = greet(name, 'Thanks a lot.');

// console.log(val);

const mygreet = function(name, thanks = 'thank you') {
    let message = `Happy Birthday ${name},You’re always there to lift me up
    And to gently warm my heart
    You never seem to fail
    In making me smile.
    You’re the very best friend
    Anyone could ever have
    You’re my favourite girl
    By a country mile.
    ${thanks}`;

    return message;
}
let dodo = mygreet(name, 'thanks a lot.');
console.log(dodo);




const myobj = {
    name :"ajeet",
    game:function () {
        return "GTA";
    }
}
console.log(myobj.game())



arr = ['fruits','furniture','vegetables','gram','dal'];
arr.forEach(function(element,index,array) {
    console.log(element,index)
    
})



//              about scope in javascript.....


let i = 214;
console.log(i);
function ui(name) {
 let  i = 9;
console.log(i)
    return `This is a ${name}.`;
}
console.log(ui("Afgaan jalebi"),i)



if(1){
    var j = 412;
    console.log(j);
}
console.log(j);
function pi(name)
{
    let j = 10;
    console.log(j);
    return `This is ${name} pi.`
}
console.log(pi("bobby"),j)




// var is function level scope.
// const and let are of block level scope.
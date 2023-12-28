console.log("hello, how it feels.. it's part 010 of js.");
// let a = document;
// a = document.all;
// // a = document.body;
// // a = document.forms[0];

// // Array.from(a).forEach(function(element){
// //     console.log(element)
// // })
//   a = document.links[01]
//   a = document.links[0].href
// //   console.log(a);
// // document.images and document.scripts and print the list of images and scripts on html page
// a = document.images[1]
// // a = document.scripts[0]
// console.log(a)
// print.document.images[2]



// a = document.images;
// b = document.scripts;
// console.log(typeof(a))
// console.log(typeof(b))

// Array.from(a).forEach(function(element){
//     console.log(element)
// })
// Array.from(b).forEach(function(element){
//     console.log(element)
// })



li = document.links
console.log(typeof li)
Array.from(li).forEach(function(element){
    b = element.href;
    bo= b.includes('linkdin')
    if(bo){
        console.log(b)
    
    }
    
})
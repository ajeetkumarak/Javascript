// let element = "ajeet";
// element.toUpperCase()
// console.log(element)

//     // STRING FUNCTIONS IN JAVASCRIPT

// const text = "String Functions";
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.length);
// console.log(text.charAt(7));
// console.log(text.includes("ion"));
// console.log(text.concat(" in js."));
// console.log(text.slice(3,5));
// console.log(text.split(" "));
// console.log(text.replace("String","Myboathead"));
// console.log(text.trim(2))
// console.log(text[4])

// const fire = "       ice cubes in a jar          "
// console.log(fire)
// console.log(fire.trim())

// const TYRE = "       ice       cubes      in     a         jar  . JAI HIND........        "
// console.log(TYRE)
// console.log(TYRE.trim())

// console.log("we are fired up.")

//   // ELEMENT SELECTORS:
//   // 1. Single element selector'
//   // 2. Multi Element Selector

// let elem = document.getElementById('containid')
// console.log(elem)
// // elem = elem.className
// // elem = elem.childNodes
// elem = elem.parentNode
// elem.style.color = 'green'
// elem.style.backgroundColor = 'silver'

// console.log(elem)

// let tag = document.getElementById('1');
// tag.innerText= 'Hello world in computer.';
// tag.innerHTML = '<li><b> Choose a job based on what can you learn there, not on money - </b>   grab the techinque from experienced person, And Boost your Experience.......</li> '
// console.log(tag.innerHTML)

// let sel = document.querySelector('#containid');
// sel = document.querySelector('.option-1')
// sel = document.querySelector('b')
// sel = document.querySelector('h1')
// sel = document.querySelector('div')
// sel = document.querySelector('form')
// sel.style.color = 'black'
// console.log(sel)

//                 //      MULTI ELEMENT SRELECTORS

// let elems = document.getElementsByClassName('child');
// console.log(elems)
// console.log(elems[0])

// elems = document.getElementsByClassName('webbox')
// console.log(elems)
// console.log(elems[0].getElementsByClassName('child'))

// let ments = document.getElementsByTagName('div')
// console.log(ments)

// for (let index = 0; index < ments.length; index++) {
//     const element = ments[index];
//     console.log(element)
// }
// // Array.from(ments).forEach(element => {
// //     console.log(element)
// //     element.style.color = 'blue'
// // });

// let red = document.getElementsByClassName('child');
// Array.from(red).forEach(element => {
//     console.log(element)
//     element.style.color = 'red'
//     element.style.backgroundColor = 'skyblue'

// });
// // console.log(red)

// console.log("welcome to the world of cricket broo....");

// let cont = document.querySelector('.no');
// cont = document.querySelector('.webbox');
// console.log(cont);
// // console.log(cont.childNodes);
// // console.log(cont.children);
// let nodename = cont.childNodes[1].nodeName;
// console.log(nodename)
// let nodetype = cont.childNodes[5].nodeType;
// console.log(nodetype)

// //    ................ NODETYPES IN JAVASCRIPTS....... . . . . . . . . .
// // ..........                   1.Elements
//                             //  2. Attribute
//                             //  3.Text node
//                             //  8.comment
//                             //  9.Document
//                             //  10.docType

//  let contain = document.querySelector('div.webbox');
//  console.log(contain);
//  console.log(contain.children)
//  console.log(contain.children[1].children[0].children)
//  console.log(contain.firstChild)
//  console.log(contain.childNodes)
//  console.log(contain.firstElementChild)
//  console.log(contain.lastChild)
//  console.log(contain.lastElementChild)
//  console.log(contain.childElementCount)

//  console.log(contain.firstElementChild)
//  console.log(contain.firstElementChild.nextSibling)
//  console.log(contain.firstElementChild.nextElementSibling)
//  console.log(contain.firstElementChild.nextElementSibling.nextElementSibling)

let creater = document.createElement("li");
let text = document.createTextNode("<b>you should be a text node</b>");
creater.appendChild(text);
creater.className = "create";
creater.id = "reate";
// creater.innerText = 'Good Morning mumbai'
// creater.innerHTML= '<b>THANKS A LOT..</b>'
creater.setAttribute("title", "creator");
console.log(creater);

let ul = document.querySelector("ul.this");

ul.appendChild(creater);
console.log(ul);

let elem2 = document.createElement("h2");
elem2.id = "elem";
elem2.className = "elem";
// elem2.innerHTML = '<b>Mobile hai Laptop</b>'
let tnode = document.createTextNode("this is a created node for elem2.");
elem2.appendChild(tnode);
console.log(elem2);

let div = document.querySelector("div.webbox");
div.appendChild(elem2);
console.log(div);

creater.replaceWith(elem2);

let myul = document.getElementById("myul");
console.log(myul);
myul.replaceChild(creater, document.getElementById("ul05"));

myul.removeChild(document.getElementById("elem"));

let cr7 = elem2.getAttribute("class"); // give the classname of elem2
cr7 = elem2.getAttribute("id"); // give id of elem2
cr7 = elem2.hasAttribute("class");
elem2.removeAttribute("id");
elem2.setAttribute("title", "myelem2title");
console.log(cr7, elem2);

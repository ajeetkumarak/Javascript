console.log("Javascript Storage : localstorage & sessionstorage");

// // Add a key value inside local Storage
// localStorage.setItem('firstname','ajeet')
// localStorage.setItem('lastname','kumar');

// // localStorage.clear()       //--- clear the entire local storage

// // Clear a particular key-value pair
// localStorage.removeItem('firstname')

// // Retrieve an item from local storage----
// let name  = localStorage.getItem('firstname');
// name = localStorage.getItem('lastname');
// // name = localStorage.getItem('csfjgsn');
// console.log(name);

// let impArray = ['adrak','pyaz','bhindi','lahsun'];
// localStorage.setItem('sabzi',impArray);
// // localStorage.setItem('sabzi',JSON.stringify(impArray));
// // // let veg = localStorage.getItem('sabzi');
// // let veg = JSON.parse(localStorage.getItem('sabzi'))
// // console.log(veg,typeof(veg));

// //          SESSION STORAGE IN JAVASCRIPT

// sessionStorage.setItem('sessionsabzi',JSON.stringify(impArray))
// sessionStorage.setItem('sessionfirstname','Sajeet')
// sessionStorage.setItem('sessionlastname','Skumar');

// let div = document.getElementById('heading');
// console.log(div)
// console.log(div.outerHTML)

// let anothernew = document.createElement('div')
// anothernew.className = 'another'
// anothernew.id = 'new'
// let anothertext = document.createTextNode('you are so cool.')
// console.log(anothernew)
// console.log(anothertext)

// anothernew.append(anothertext)
// console.log(anothernew.outerHTML)

// div.append(anothernew)
// console.log(div.outerHTML)

// let click = document.querySelector('.another');
// click.addEventListener('click',function (e) {
//     console.log("Good morning")
//     let flick = e.offsetX
//     flick = e.target
//     console.log(flick)
//    let onenew = document.ATTRIBUTE_NODE`qa`

//   console.log(onenew.outerHTML)
// })












// let divElem = document.createElement("div");

// // let val = localStorage.getItem("text");
// let text;

// if (val == null) {
//   text = document.createTextNode("This is my element, Click to edit it.");
// }
//  else {
//   text = document.createTextNode(val);
// }

// divElem.appendChild(val);
// divElem.setAttribute("id", "elem");
// divElem.setAttribute("class", "elem");

// divElem.setAttribute("style","border:2px solid black; width: 154px; margin: 35px, padding:25px ");
// let container = document.querySelector(".container");
// let first = document.getElementById("myfirst");

// // insert the element with id first
// container.insertBefore(divElem, first);
// console.log(divElem, container, first);

// let elem = document.getElementById("elem").addEventListener("click", function (e) {
//     console.log("you have clicked it");
//   });
//   divElem.addEventListener("click", function () {
//     console.log("you just clicked it");
//   //   let noTextAreas = document.getElementsByClassName("textarea").length;
//   //   if (noTextAreas == 0) {
//   //     let html = elem.innerHTML;
//   //     divElem.innerHTML = `<textarea class="textarea" id = "textarea" rows ="3" > ${html} </textarea> `;
//   // }

//   // // listen for the blur event on textarea
//   // let textarea = document.getElementById("textarea");
//   // textarea.addEventListener("blur", function () {
//   //   elem.innerHTML = textarea.Value;
//   //   localStorage.setItem("text", textarea.Value);
//   // });
// });



let free = document.getElementById('heading')
free.addEventListener('mouseover',function(){
  free.style.color = 'yellow'
  free.style.backgroundColor = 'green'
  free.style.textAlign = 'right'
  free.style.top='45px'
})




console.log("hum is video me janenge ki ye log kaun hai jo ")
let container = document.querySelector('.container')
let first = document.getElementById('myfirst')

let newdivelement = document.createElement('div')
newdivelement.setAttribute('id','newheading')
newdivelement.setAttribute('class','oldheader')
container.insertBefore(newdivelement,first )

let newheaderelement = document.createElement('h2')
newheaderelement.innerText = "Double click on me to Edit."
newdivelement.appendChild(newheaderelement)


console.log(newdivelement)
newdivelement.addEventListener('mouseover',function(){
  newdivelement.style.fontSize='150%'
  newdivelement.style.fontStyle='italic'
  newdivelement.style.backgroundColor = 'silver'


  console.log("i clicked it...")
})

// Creating the editable element
// Whenever somenone double click on text it will turn to editable.
let newinputelement = document.createElement('input')
newinputelement.setAttribute('id','inputtext')
newinputelement.setAttribute("value","")

newdivelement.addEventListener('dblclick',function(){
     newdivelement.replaceWith(newinputelement)
})

//Click outside to save the text into localstorage as(edited) name.
newinputelement.addEventListener('blur',function(){
  localStorage.setItem('Edited',JSON.stringify(newinputelement
    .value))
})
console.log("here we learn html element selector in js.")
document.all()

/*      Element Selector:
        1. Single element selector
        2. Multi element Selector
      
*/

let element = document.getElementById('myfirst');
// element = element.className;
//  element = element.childNodes;
// element = element.parentNode;
// element.style.backgroundColor='yellow';
element.style.color='green'
element.innerText = 'this website is approved by me.'
element.innerHTML = '<h2>WELCOME</h2>'
// console.log(element)
console.log(element.innerHTML)



let sel = document.querySelector('#myfirst');
 sel = document.querySelector('.child');
 sel = document.querySelector('h1')
 sel.style.color='silver'
console.log(sel);





// 2. MULTI ELEMENT SELECTOR ......

let elem = document.getElementsByClassName('child');
    //  elem = document.getElementsByClassName('container');
console.log(elem)
// console.log(elem[0]);
// console.log(elem[0].getElementsByClassName('child'));
// elem = document.getElementsByTagName('div')
// console.log(elem)

// for (let index = 0; index < elem.length; index++) {
//     const element = elem[index];
//     console.log(element);
//     element.style.color = 'red';
// }

// Array.from(elem).forEach(element => {
//     console.log(element);
//     element.style.color ='red'
// });



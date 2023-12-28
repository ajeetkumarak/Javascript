console.log('we here learn about traversing in DOM..');

let cont = document.querySelector('.no');
cont = document.querySelector('.container')
console.log(cont)
// console.log(cont.childNodes)
// console.log(cont.children)

// let nodeName = cont.childNodes[10].nodeName
// console.log(nodeName)
let nodeType = cont.childNodes[3].nodeType;
console.log(nodeType)


/*
      Node Types......
      1. element
      2. Attribute
      3. Text node
      8. Comment
      9. document
      10. docType

*/


let container = document.querySelector('.container')

console.log(container.children)
console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild.outerHTML);
console.log(container.lastElementChild.outerHTML)
console.log(container.lastChild)
console.log(container.lastElementChild);
console.log(container.childElementCount);
console.log(container.childNodes);
console.log(container.children);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.outerHTML);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);


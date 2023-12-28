console.log(`Good Morning pc, now we learn about:CREATING, REMOVING AND REPLACING ELEMENTS IN JS.`);
console.log(". . .  . .  . . . . . . . . . . . .  . . . .");

let element = document.createElement('li');
element.className = 'childul'
element.id = 'createrli'
element.setAttribute('title','mytitle')
element.setAttribute('alt','ram')
element.innerText = 'Hello World, this is created by aj foundation.'
// element.innerHTML = '<b>lenovo vs brain</b>'
console.log(element.outerHTML);

let ul = document.querySelector('ul.this');
// console.log(ul.outerHTML)
ul.appendChild(element);
console.log(ul.outerHTML);



let element2 = document.createElement('h3')
element2.id = 'elemid-2'
element2.className = 'elemclass2'
let texnode = document.createTextNode('hello this is created node of element 2.')
element2.appendChild(texnode)
console.log(element2.outerHTML)

 element.replaceWith(element2)
 console.log(ul.innerHTML)

console.log(" , , , , , , , , , , , , , , , , ,  , , , , ,")

   let myul = document.getElementById('myul');
    myul.replaceChild(element, document.getElementById('22'))
//    console.log(ul.children)

myul.removeChild(document.getElementById('33'));

let pr = element2.getAttribute('id')
  pr = element2.getAttribute('class')
  pr = element2.hasAttribute('class')    //    boolean i.e.true/false
  pr = element2.hasAttribute("href")      //    boolean i.e.true/false

    element2.removeAttribute('id')
   element2.setAttribute('title','ajeetelem2')
console.log(element2,pr)


/*    
      create a heading element wit text as "Go to codewithharry" and create a tag outside it with href = "https://www.codewithharry.com"



*/ 








console.log(". , . , . , . , . , . , . , . , . , . , .")

let script = document.createElement('div');
let text = document.createTextNode('I am a text node')
script.appendChild(text)
script.className = 'yes'
script.id = 'no'
script.setAttribute('alt','good')
// script.innerText = 'scriptjava005'
// script.innerHTML = ' <b>javascript005</b> '
console.log(script)

let kl = document.querySelector('.box')
console.log(kl)
kl.appendChild(script);


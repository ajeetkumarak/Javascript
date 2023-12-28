console.log("good morning, All systems are ready for website designation.")
let virat = document.createElement('li')
let textnode = document.createTextNode('this is virat kohli representing India in worldcup. ')
virat.className = 'cricket'
virat.id = 'kohli'
virat.setAttribute("title","bcci")
console.log(virat)
virat.appendChild(textnode)
console.log(virat.outerHTML)
virat.hasAttribute()

let icc = document.querySelector('ul.this')
icc.appendChild(virat)
console.log(icc)
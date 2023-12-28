console.log("hewy man *, welcome back bro !");

let car = document.getElementsByName("cars")[0];

console.log(car);

console.dir(car);

car.onclick = function (event) {
  console.log(event);
};

// car.addeventlistner('click',function (event) {
//     console.log('clicked by add event listner');
// })

// car.addeventlistner
car.addEventListener('click', function  (event){
  console.log('You clicked on car selections menu.')
})

car.addEventListener('click', function vfv (event){
  console.log(' Now, select your the best car.')
  // console.log(yyyy())
})

function Clickcallback (event) {
  console.log('Buy the sected best cars')
}
car.addEventListener('click', Clickcallback)

// We can remove eventlistner as follows:
car.removeEventListener('click', Clickcallback)

car.addEventListener('click', function (event) {
  console.log("896321478963212584478")
})



//*    Create & appendChild & insertBefore

var element = document.createElement('div')
element.style.cssText = "width:500px; height:150px; background:silver;" ;
element.id ='divid'
element.className= 'divclass'
element.onclick = function(){
  alert('hey Man');
};

// document.body.appendChild(element)

let target = document.getElementById('beforediv')
console.log(target)
document.body.insertBefore( element, target)


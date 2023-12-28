console.log("here we gonna make a project relater to js");

function  set( ) {
// alert('clicked')
  let elements = document.getElementsByName('cssproperty');
  console.log(elements);

  for (let index=0; index<elements.length; index++){
    // console.log(index);
    // console.log( elements[ index ])
    // console.log( elements[ index ].getAttribute('id'))

    // console.log( elements[ index ].value)

    let cssproperty = elements[ index ].getAttribute('id')

    let cssvalue = elements[ index ].value

    console.log(cssproperty, cssvalue)
    
    let div = document.getElementById('modify');
    div.style[ cssproperty ] = cssvalue ;
  }
}

document.getElementById('set').addEventListener('click', set);







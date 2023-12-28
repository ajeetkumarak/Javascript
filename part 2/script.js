console.log("Welcome back sir, All Systems are prepared for console.")

let fetchbtn = document.getElementById('fetchbtn')
fetchbtn.addEventListener('click',buttonClickHandler)

 function buttonClickHandler() {
    console.log("Sir, Clicked fetchbtn button")
    //  instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET','AjaxAjeet.txt',true);
    //    xhr.open('GET',"https://jsonplaceholder.typicode.com/todos/1" ,true )
    // use for POST request
        xhr.open("POST","https://dummy.restapiexample.com/api/v1/create",true)

    // xhr.open('GET','AjaxAjeet.txt',true);
   
        xhr.getResponseHeader('content-type','application/json')   
    // what to do on progress(optional)
    xhr.onprogress = function(){
        
        console.log(' On Progress')
    }

     xhr.onreadystatechange= function() {
        console.log("ready state is ", xhr.readyState)
     }

// what to do when response is read
    xhr.onload = function() {
        console.log(this.responseText)

        if (this.status===200){
            console.log(this.responseText)
            }
            else{
                console.log("Some Error occured")
    
            }
    }
    // send the request
    params =`{ "name":"test10","salary":"125","age":"23" , "id":"456210"}`
    xhr.send();

    console.log("we are done Nicely..")
}





let popbtn= document.getElementById('popbtn');
popbtn.addEventListener('click',popHandler)

function popHandler(){
    console.log("Sir, Clicked pop-up button")
    //  instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
       xhr.open('GET',"https://dummy.restapiexample.com/api/v1/employees" ,true )
    // use for POST request

     
   xhr.onload = function () {
    if (this.status===200){
        let obj = JSON.parse(this.responseText)
        console.log(obj);
        let list = document.getElementById('list')
        str ="";
        for (key in obj)
        {
            str += `<li>${obj[key].employee_name} </li>`;

        }
        list.innerHTML = str;
        }
        else{
            console.log("Some Error occured")

        }
   }

   xhr.send();
   console.log("WE are done.. fetching Employees")
}
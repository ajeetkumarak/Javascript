console.log("Promises in Javascript")

//  * Promises in javascript is same as promises in real life
// *if I made a promise then , there is 03 possibilities i.e.
// 1. I resolve the promise(complete my promise)     ,or
//  2. I reject the promise     ,or
//  3. I will pending the promise



function func1() {
    return new Promise(function(resolve, reject){

        setTimeout(()=>  {

            const error = true;
            if(!error) {
                console.log("Your promise has been resolved")
                resolve();
            }
            else{
                console.log("Sorry, Your promise has not been resolved")
            reject('sorry not fulfilled');
            }
            

        }, 2000);
    })
}

func1().then(function(){
    console.log("Ajeet: Thanks for resolving")
}).catch(function(error){
    console.log("Ajeet: Very bad Bro! REason:" + error)
})
console.log("Promises, Promise.then() & Promise.catch()")


const students = [
    {name:"ajeet", subject:"javascript"},
    {name:"harry", subject:"Machine Learning"}
];

function enrollStudent(student){

     return new Promise (function(resolve, reject){

        setTimeout(function() {
            students.push(student);
            console.log("Student has been Enrolled.")
       
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 1000);
     })

} 

function getStudents() {
    setTimeout(function(){
        let str = ""
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        })

        document.getElementById('students').innerHTML = str;
        console.log("Student(sunny) has been fetched.")
    }, 3000);
}

let newStudent = {name:"Sunny",subject:"Python"}

// enrollStudent(newStudent).then(function(){
//     getStudents();

// }).catch(function(){
//     console.log("some error occured.")
// })
// getStudents();

enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("some error occured.")

})




// * Note:
//        *function inside then(.......) is ran as = resolve()
//       * function inside catch(.....) is ran as = reject()




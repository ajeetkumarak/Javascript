console.log("Be ready for study Callback functions in js.")


// const students = [
//     {name:"ajeet", subject:"javascript"},
//     {name:"harry", subject:"Machine Learning"}
// ];

// function enrollStudent(student){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been Enrolled.")
//     }, 5000);
// } 

// function getStudents() {
//     setTimeout(function(){
//         let str = ""
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         })

//         document.getElementById('students').innerHTML = str;
//         console.log("Student(sunny) has been fetched.")
//     }, 1000);
// }

// let newStudent = {name:"Sunny",subject:"Python"}

// enrollStudent(newStudent)
// getStudents();

/*
  callback functions can be synchronous as well as asynchronous
  forEach function is synchronous 
setTimeout function & xhrRequesthttp are asynchronous 

*/
const students = [
    {name:"ajeet", subject:"javascript"},
    {name:"harry", subject:"Machine Learning"}
];

function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been Enrolled.")
        callback();
    }, 1000);
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

enrollStudent(newStudent, getStudents)
// getStudents();



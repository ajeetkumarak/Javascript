/* Primitive data types  */
 // 1. string
      let name = "chrome";
       console.log("my string is "+name);
       console.log("data type is "+ (typeof name));

 // 2. Numbers      
       let marks = 65.55;
       console.log(marks);
       console.log("data type is "+ (typeof marks));

       let fingermarks = "65";
       console.log(fingermarks);
       console.log("data type is "+ (typeof fingermarks));

 // 3. Boolean      
    let isdriver = true;
    console.log(isdriver);
    console.log("data type is "+ (typeof isdriver));

    let ispilot = false;
    console.log(ispilot);
    console.log("data type is "+ (typeof ispilot));

 // 4. Null   
         let nullvar = null
         console.log(nullvar);
         console.log("data type is "+ (typeof nullvar));
         
  // 5. Undefined       
         let undef = undefined;
         console.log( undef );
        console.log("data type is "+ (typeof  undef ));
         


  // Reference Data Types    


// 1. Arrays
    let  myarr = [1,2,3,4, false, "string"]  
     console.log(myarr)
     console.log("data type is "+(typeof myarr))

// 2. Object Literals     
     let stmarks = {
        harry:56,
        ajeet:58,
        virupaaji:95,
       ' mohan das':87
     }
     console.log(stmarks)
     console.log("data type is "+ (typeof stmarks))

  // 3. Functions
           function findname() {
             
           }
           console.log(findname)
        console.log(typeof findname)
//  4. Date
        let date = new Date();
        console.log(date)
        console.log(typeof date)
//loops in js
//for/in loop--loops through the properties of an object
/* for (key in object) {
     code block to be executed
   }*/

let person={
             first_name:"aman",
             last_name:"kumar",
             age:"30",
             hobby:"cricket"
           };

 //for/in loop will loop through each property of this object          
 for(let val in person){
     console.log(person[val]);
 }
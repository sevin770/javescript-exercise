//while

var output = [];
var count = 1;

function fizzBuzz(){
   
    while(count<101){

        if(count % 3 ===0 && count % 5 ===0){
            output.push("fizzBuzz");
        } else if (count % 3 ===0) {
            output.push('fizz')
        } else if (count % 5 ===0) {
            output.push('buzz')
        } else {
            output.push(count);
        }

        count++;
    }
    
    console.log(output);
 
 }



//for


var output = [];

function fizzBuzz(){
   
    for(var count=1; count<101; count++ ){

        if(count % 3 ===0 && count % 5 ===0){
            output.push("fizzBuzz");
        } else if (count % 3 ===0) {
            output.push('fizz')
        } else if (count % 5 ===0) {
            output.push('buzz')
        } else {
            output.push(count);
        }

        //count++;
    }
    
    console.log(output);
 
 }
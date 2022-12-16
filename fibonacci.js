
function fibonacciGenerator(n){
    var fibonacciArray = [];
    // 순서(n) = 1,2,3,4,5
    // 증가(m) = 0,1,2,3,4
    // 값  ( ) = 0,1,1,3,5

    if (n=1){
        fibonacciArray = [0];
    } else if (n=2){
        fibonacciArray = [0, 1];
    } else {
        for(m=2; m<5; m++){
            fibonacciArray.push(fibonacciArray[fibonacciArray.length-2]+fibonacciArray[fibonacciArray.length-1]);
        }
    }

    console.log(fibonacciArray);
    return fibonacciArray;

}
fibonacciGenerator(10);





//답안지

function fibonacciGenerator(n){
    var output = [];
    if(n===1) {
        output = [0];
    }
    else if (n===2){
        output = [0,1];
    }
    else {
        output = [0,1];
        for (var i=2; i<n; i++){
            output.push(output[output.length-2]+output[output.length-1]);
        }
    }
    console.log(output);
    return output;

}
fibonacciGenerator(5);
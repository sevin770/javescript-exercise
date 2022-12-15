function bmiCalc(weight,height){

    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}

console.log("당신의 bmi는 " + bmiCalc(65,1.8) + " 입니다.");


//20이 출력됨


//제곱 Math.pow(height,2);


// Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수이며,

// Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수이며,

// Math.round 는 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수입니다.
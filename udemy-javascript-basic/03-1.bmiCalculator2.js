
weight = prompt("몸무게가 몇 입니까?");
height = prompt("키가 몇 입니까?");

function bmiCalc(weight,height){

    var bmi = weight / Math.pow(height,2);
    var resultBmi = Math.floor(bmi * 10000);
    return resultBmi;
    
}

    
    if( bmiCalc(weight,height) < 18.5 ){
        alert("당신의 bmi지수는 " + bmiCalc(weight,height) + " 이므로 저체중 입니다.");
    }
    else if( bmiCalc(weight,height) >= 18.5 && bmiCalc(weight,height) <= 24.9){
        alert("당신의 bmi지수는 " + bmiCalc(weight,height) + " 이므로 정상체중 입니다.");
    }
    else {
        alert("당신의 bmi지수는 " + bmiCalc(weight,height) + " 이므로 과체중 입니다.");
    }



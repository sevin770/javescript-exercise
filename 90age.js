
//90살까지 살 수 있다면 남은 시간은?


//혼자 해보기

function lifeInWeeks(age){

    var goalAge = 90;
    //var age = prompt("당신의 나이는 몇 살 입니까?");
    
    var day = 365;
    var week = 52;
    var year = 12;

    var totalDay = (day*goalAge);  
    var totalWeek = (week*goalAge);
    var toalYear = (year*goalAge);

    var restDay = totalDay-(age*day);
    var restWeek = totalWeek-(age*week);
    var restYear = toalYear-(age*year);


    
    console.log( restDay + ' 일 , ' + restWeek + ' 주 , ' + restYear + ' 개월 이 남았습니다.');

}

lifeInWeeks(prompt("당신의 나이는 몇 살 입니까?"));



//정답

// function liftInWeeks(age) {

//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var years = yearsRemaining * 12;

//     console.log( days + ' 일 , ' + weeks + ' 주 , ' + years + ' 개월 이 남았습니다.');

// }
// liftInWeeks(89);
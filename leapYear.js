




//혼자하기

year = prompt("몇 년도 윤년을 확인하시겠습니까?");

function leapYearFour(year) {
    var four = year / 4;
    return four;
}
function leapYearHundred(year) {
    var hundred = year / 100;
    return hundred;
}
function leapYearFourHundred(year) {
    var fourHundred = year / 400;
    return fourHundred;
}

console.log(leapYearFour(year));
console.log(leapYearHundred(year));
console.log(leapYearFourHundred(year));

if (leapYearFour(year) == Math.ceil(leapYearFour(year))) {
   if(leapYearHundred(year) == Math.ceil(leapYearHundred(year))){
    if(leapYearFourHundred(year) == Math.ceil(leapYearFourHundred(year))){
        alert(year + " 년은 윤년입니다.");
    }
    else {
        alert(year + " 년은 윤년이 아닙니다.");
    }
   }
   else {
    alert(year + " 년은 윤년입니다.");
}
}

else {
    alert(year + " 년은 윤년이 아닙니다.");
}


//답안지

// year = prompt("몇 년도 윤년을 확인하시겠습니까?");

// function isleap(year){

//     if (year % 4 === 0) {
//         if(year % 100 === 0){
//             if(year % 400 === 0){
//                 return "윤년 입니다.";
//             } else {
//                 return "윤년이 아닙니다.";
//             }
//         } else {
//             return "윤년이 아닙니다.";
//         }
//     } else {
//         return "윤년이 아닙니다.";
//     }

// }

// console.log(isleap(year));
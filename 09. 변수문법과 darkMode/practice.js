

//이자율 계산 - 혼자해보기

let savingMoney = 60000;

// function twoYearsRaterMoney(){
//     if( savingMoney < 50000 ) {
//         console.log ('2년 후 내가 받을 예금 총액 = ' + ((savingMoney * 1.15)*1.15));
//     } else if( savingMoney >= 50000 ){
//         console.log ('2년 후 내가 받을 예금 총액 = ' + ((savingMoney * 1.2)*1.2));
//     }
// }
// twoYearsRaterMoney();

//답
// var 예금액 = 60000;
// var 미래예금액 = 0;

// if ( 예금액 >= 50000 ){
//   미래예금액 = 예금액 * 1.2 * 1.2 ;
// } else {
//   미래예금액 = 예금액 * 1.15 * 1.15 ;
// }
// console.log(미래예금액) 

//응용 1.2를 10번 곱하려면?

// function Money(){
//     console.log ('2년 후 내가 받을 예금 총액 = ' + ((savingMoney * (1.2**10))));
// }
// Money();

// console.log(1.2**10);

//-----------------------------------------------------------------------

//커피 리필양 계산 - 혼자해보기
// let first = 360;
// let second = (first / 3 * 2);
// let third = (second / 3 * 2);
// let total = first + second + third;
// console.log(total);

//답
// var first = 360;
// var total = 0;
// total = first + first * 2 / 3 + first * 2 / 3 * 2 / 3
// console.log(total)

//응용 - 무한리필이라면 먹을 수 있는 총량은?
//무한등비수열의 합 r < 1이므로 수렴, a / 1-r 
// let a = 360;
// let r = 2/3;
// let total = a / (1-r);

// console.log(total);


//-----------------------------------------------------------------------

// 퀴즈만들기. 혼자해보기

let count = 0;

document.querySelector('#send-answer').addEventListener('click', function(){
    
    count++;
    if( document.querySelector('#answer').value == 1335 && count <= 3 ) {
        console.log('성공');
    }
    else if ( count <= 3 ) {
        console.log('다시 생각해보세요.');
    }
    else if ( count > 3){
        console.log('기회 끝. 실패');
    }
});

//답

// var count = 0;

// document.querySelector('#send-answer').addEventListener('click', function(){
//   count += 1;
//   var 유저답안 = document.querySelector('#answer').value;
//   if (유저답안 == '1335') {
//     alert('성공')
//   } else if (count >= 3 && 유저답안 != '1335'){
//     alert('멍청아')
//   }
// });
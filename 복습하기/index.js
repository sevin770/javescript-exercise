

//01. slice(), toUpperCase(), toLowerCase();

//slice(0,5) : 0~4까지 잘라줌.
//toUpperCase() : 대문자
//toLowerCase() : 소문자

//예제 : 앞부분만 대문자로 나오게 하기

// var text = prompt("이름이 뭡니까?");

// var firstChar = text.slice(0,1);
// var upperCaseFirstChar = firstChar.toUpperCase();

// var restChar = text.slice(1,text.length);
// var lowerCaseRestChar = restChar.toLowerCase();

// var result = upperCaseFirstChar + lowerCaseRestChar;
 
//  alert("Hello " + result);



//---------------------------------------------------------------------------------------------------------



//02. 연산자, i++, i--, ==, ===, !==, &&, ||, !
// Math.ceil(), Math.floor(), Math.round(), Math.random(), Math.pow()


// '==' 연산자를 이용하여 서로 다른 유형의 두 변수의 [값] 비교
// '==='는 엄격한 비교를 하는 것으로 알려져 있다 ([값 & 자료형] -> true).
// Math.ceil() : 반올림
// Math.floor() : 반내림
// Math.round() : 반내림&반올림
// Math.pow() : 제곱

// Math.random() : 난수생성
// var n = Math.random();
// n * 6 을 한다면 0~5.999999999999... 범위를 얻음.
// Math.floor(n*6)을 한다면 0~5 범위
// Math.floor(n*6)+1 하면 1~6 범위

//예제1 : buyMilk 우유를 몇 개 살 수 있나? 남은 돈은?

// var startMoney = prompt("얼마를 가지고 있습니까?");
// var costPerBottles = prompt("우유는 개당 얼마 입니까?");


// function calcBottles(startMoney, costPerBottles){
    
//     var numberOfBottles = Math.floor(startMoney / costPerBottles);
//     return numberOfBottles;

// }

// function calcChange(startMoney, costPerBottles){
//     var change = startMoney % costPerBottles;
//     return change; 
// }

// alert("우유는 총 " + calcBottles(startMoney, costPerBottles) + " 개 살 수 있고, 남은 돈은 " + calcChange(startMoney,costPerBottles) + " 원 이다.");


//예제2 : bmi계산기 만들기

// var weight = prompt("몸무게가 몇 입니까?");
// var height = prompt("키가 몇 입니까?");

// function bmiCalc(weight, height){
//     height = height/100; // m로 계산되니까 cm바꿔준다.
//     var bmi = weight / Math.pow(height,2);
//     console.log(bmi);
//     return Math.round(bmi);
// }

// alert("당신의 bmi는 " + bmiCalc(weight, height) + " 입니다.");

//예제 3 : 90살까지 남은 시간은?

// function lifeInWeeks(age){

//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var years = yearsRemaining * 12;
//     console.log(days + ' 일 , ' + weeks + ' 주 , ' + years + ' 개월 이 남았습니다.');
// }

// lifeInWeeks(89);



//---------------------------------------------------------------------------------------------------------


//03. 

// - 조건문 if else 
// include : true, false 

// 리스트에 이름이 있을 경우, 없을 경우
// if (guestList.includes(guestName)){
//     alert("어서오세요.");
//  } else {
//     alert("죄송합니다. 예약 후 다시 오세요.")
//  }

// 예제01 : bmi계산기 업그레이드 버전, 저체중&정상체중&과체중 판별

// var weight = prompt("몸무게가 몇 입니까?");
// var height = prompt("키가 몇 입니까?");

// function upgradeBmiCalc(weight,height){
//     height = height / 100;
//     var bimCalc = weight / Math.pow(height,2);
//     var result = Math.floor(bimCalc);
//     return result;
// }

// if( upgradeBmiCalc(weight,height) < 18.5 ){
//     alert("당신의 bmi지수는 " + upgradeBmiCalc(weight,height) + " 이므로 저체중 입니다.");
// }
// else if( upgradeBmiCalc(weight,height) >= 18.5 && upgradeBmiCalc(weight,height) <= 24.9){
//     alert("당신의 bmi지수는 " + upgradeBmiCalc(weight,height) + " 이므로 정상체중 입니다.");
// }
// else {
//     alert("당신의 bmi지수는 " + upgradeBmiCalc(weight,height) + " 이므로 과체중 입니다.");
// }


//예제02 : 윤년 계산하기

// var year = prompt("몇 년도 윤년을 확인하시겠습니까?");

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


//예제03 : 러브계산기 만들기 Math.random() 랜덤 뽑기

// function loveCalculator(){
    
//     var lovePercent = Math.random(); // 0~0.99999까지의 난수
//     lovePercent = lovePercent * 100;
//     lovePercent = Math.floor(lovePercent) +1; //0값을 없애기 위해 +1
//     console.log("두 사람의 사랑 지수는 " + lovePercent + " % 입니다" );
// }
// loveCalculator();



//---------------------------------------------------------------------------------------------------------


//04.

// - 배열 [], length, include, push(),
// length : 배열의 길이. 
// push() : 배열에 항목 넣기.
// var output = []; 빈 배열 만들기
// output.push(1); 배열에 넣고 싶은 목록을 push()에 넣는다


//예제1 : 누가 점심을 살까요? 배열 중에 랜덤으로 뽑기.

    // function whoLunch(lunchFamily){
        
    //     var lunchFamily = ["지영", "현아", "예나", "민정", "다윤"];
    //     var buyLunchPersonNum = Math.floor(Math.random()*lunchFamily.length);
    //     var result = lunchFamily[buyLunchPersonNum];

    //     console.log(result); 
    //     return result;
    // }
    
    // whoLunch();


//예제2 : fizzBuzz게임 3의배수 fizz 5의배수buzz 3과5의배수fizzbuzz 가 나오도록 배열 구성.

// var output= [];
// var count = 1;

// function fizzBuzz(){

//     if(count % 3 === 0 && count % 5 === 0) {
//         output.push('fizzbizz');
//     }
//     else if(count%3 === 0){
//         output.push('fizz');
//     }
//     else if((count%5 === 0)){
//         output.push('buzz');
//     }
//     else {
//         output.push(count);
//     }
//     count++;
//     console.log(output);
// }

//콘솔창에서 fizzBuzz();쳐서 결과를 1개씩 볼 수 있다.
//여기서 그냥 실행하면 무한대로 계속 나오기 때문에 밑에서 반복문을 이용해서 100까지만 나오게 해보자.


//---------------------------------------------------------------------------------------------------------



//05. 반복문 while , for

// for(i=0; i<2; i++)
// i=0 - 시작점
// i<2 - 끝점
// i++  변경사항

// while로 표현하면 다음과 같다.

// var i=0
// while(i<2) {
//    console.log(i)
//    i++;
// }


//예제1 : fizzbuzz게임 반복 실행하기

//- while활용

// var output = [];
// var count = 1;

// function fizzBuzz(){

//     while(count<101) {
        
//         if(count % 3 ===0 && count % 5 ===0){
//             output.push("fizzBuzz");
//         } else if (count % 3 ===0) {
//             output.push('fizz')
//         } else if (count % 5 ===0) {
//             output.push('buzz')
//         } else {
//             output.push(count);
//         }
//         count++;
//     }
//     console.log(output);
// }
// fizzBuzz();

//- for 활용

// function fizzBuzz(){

//     for(var count=1; count<101; count++){
//         if(count % 3 ===0 && count % 5 ===0){
//             output.push("fizzBuzz");
//         } else if (count % 3 ===0) {
//             output.push('fizz')
//         } else if (count % 5 ===0) {
//             output.push('buzz')
//         } else {
//             output.push(count);
//         }
//     }
//     console.log(output);
// }


//예제2 : 피보나치 수열 

// function fibonacciGenerator(n){
//     var output = [];
//     //값 0,1,1,2,3,5...

//     if( n===1 ){
//         output = [0];
//     }
//     else if ( n===2 ){
//         output = [0, 1];
//     }
//     else {
//         output = [0, 1];
//         for (var i = 3; i < n; i++) {
//             output.push(output[output.length-1]+output[output.length-2]);
//         }
//     }

//     console.log(output);
//     return output;

// }

// fibonacciGenerator(10);

//---------------------------------------------------------------------------------------------------------


//06. document


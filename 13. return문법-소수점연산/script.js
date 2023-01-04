
function 함수(){
  return 123 // 함수 쓰고 그 자리에 뭔가 뱉고 싶으면 싶으면 return : 문자열, 수식등 다 들어갈 수 있다.
  //return은 함수종료 기능도 가지고 있다.  밑에 코드는 실행x 
  //자료를 넣으면 다른 자료가 나오는 변환기를 만들고 싶을 때. 
  //문자 -> 문자 변환기, 숫자 -> true/false 변환기 등등
}

var 변수 = 함수();
console.log(변수);


//부가세 계산기
console.log(vat(50000));
console.log(vat(60000));

function vat(a){
  return a * 0.1
}
vat(50000);



//소수점 있는 숫자 연산시 주의점
//컴퓨터는 2진법으로 계산을 함. 소수점을 2진법으로 바꾸면 무한히 반복되는 숫자가 나옴. 임의로 반올림하기 때문에 오차발생

//소수점 반올림 하는 법.

function vat(a){
  var num = (a * 1.1).toFixed(2); // 숫자.toFixed(몇자리) / 주의점: 문자로 변환됨./ 자바스크립트 연산자 특징 '문자'+123 = '문자123' 다시 숫자로 변환해줘야함 parseFloat(num);
  return parseFloat(num);
}
console.log(vat(55555));


// 예제1) 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어 보기
// function result(m,s){
//   var Msecond = m * 60;
//   var ms = (Msecond+s) * 1000;
//   return ms;
// }
// console.log(result(1,30));

//답
// function 함수(a, b){
//   var result = (a * 60 + b) * 1000;
//   return result
// }

//예제2) 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어 보기
// function result(a,b){
//   var sale = a * 0.9;
//   var total = (sale - 1.5).toFixed(1);

//   if( b === true ) {
//     return parseFloat(total); 
//   } else {
//     return sale;
//   }
// }
// console.log(result(70,false))
// console.log(result(10,true))

//답
// function 함수(a, b){
//   var result = a * 0.9;
//   if (b == true) {
//     result = result - 1.5;
//   }
//   return parseFloat(result.toFixed(2))
// }

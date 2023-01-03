변수
1. 길고 복잡한 자료 저장가능
2. 특정 값을 기억하게 만들고 싶을 때

변수의 선언, 할당, 범위

var 이름; //선언
var 이름 = 'kim' //할당

이름 = 'kim'
이름 = 'park' //재할당, 자유롭게 가능


함수 안에서 변수를 만들면 사용가능 범위는 함수 내부.
함수 밖에서 변수를 만들면 함수 안에서도 사용 가능.

function 함수(){
  var 이름 = 'kim';
  console.log(이름);
}

var 이름 = 'kim';
function 함수(){
  console.log(이름);
}

var, let, const 차이. 재선언, 재할당, 범위


var 재선언o, 재할당o, 범위function
let 재선언x,재할당o, 범위 {} :변수 이미 사용한 거 잊고 또 사용할 경우 버그 방지.
cosnt 재선언x, 재할당x, 범위 {} :변하면 안되는 값을 저장하기 용이함.

재선언
let 이름 = 'kim'
let 이름 = 'park' x 

재할당
const 이름 = 'kim'
이름 = 'park' x
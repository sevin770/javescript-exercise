◆ Synchronous 동기식 처리
- 한번에 코드 한 줄씩 차례로 실행.
- 병렬처리x 


◆ Asynchronous 비동기식 처리

console.log(1);
setTimeout(()=>{console.log(2)}, 1000); // 비동기식처리 도와주는 함수.
console.log(3);
-> 1,3,2출력됨.
js에서만 이렇다. 쉬는 동안에 다음 코드가 실행됨.
js를 실행하는 브라우저 덕분에 가능한 것이다.
비동기식처리 = 오래걸리는 작업이 있으면 제껴두고 다른거부터 처리하는 방식.

예시로 php)
print(1) // 1출력
time.sleep(1) // 1초쉬고
print(2) // 2출력
-> 1출력하고 1초간 정지되었다가 2출력된다. 

------------------------------------------------
// 오래걸리거나 실행까지 오래걸리는 함수들
console.log(1);
setTimeout(()=>{console.log(2)}, 1000); 
element.addEventListner('click', function(){}); 
$.ajax()
------------------------------------------------

브라우저는 오래 걸리거나 실행까지 오래걸리는 함수들을 Web API라는 공간으로 보냄. 
실행 대기실과 같다.(예시로 저위에 setTimeout 설정한 1초가 지나기를 기다리는 것과 같음)
해결이 되면 다시 빼내서 실행됨.

◆ Web API 덕분에 비동기식 처리가 가능하다.
웹브라우저의 특수성.

그냥 js는 오래걸리는 연산을 만나면 멈춤. (=동기식처리, Synchronous)
Web API와 연관된 특수한 함수들을 쓰면 작업이 오래걸릴 때 다른거부터 실행 가능(=비동기식 처리,Asynchronous)

◆ js를 순차적으로 실행하려면?
콜백함수를 사용한다.
코랙함수 : 함수 안에 들어가는 함수. 

1초 텀을 주고싶다.
console.log(1);
setTimeout(()=>{}, 1000);
console.log(2);
-> 이렇게 하면 안됨. 비동기식 처리가 되기 때문임.

콜백함수를 사용하면 됨.
console.log(1);
setTimeout(()=>{console.log(2)}, 1000);
ex)
addEventListener('click', function(){}); <<  콜백함수
addEventListener('click', 함수); << 함수 이름을 넣을 수도 있다. 이름만 써야함. 함수()는 실행이니까 ()빼줘야 됨.

- 콜백함수를 이용한 함수 디자인

function 첫째함수(){}
function 둘째함수(){}

Q. 첫째함수 다음에 둘째함수를 실행하고 싶다면?
첫째함수();
둘째함수();
이렇게 짠다면 오류가 날 수도 있다.
첫째함수에 비동기식처리 코드가 있다면 web API공간으로 보내질 수도 있기 때문에 둘째함수가 먼저 실행될 수 있다. 

첫째함수(둘째함수); 
이런식으로 콜백함수를 이용한다. 
파라미터를 뚫어줘야함.

function 첫째함수(구멍){
    console.log(1);
    구멍();
}
function 둘째함수(){
    console.log(2);
}
첫째함수(둘째함수); 

◆ 콜백함수의 문제점

둘째함수이름을 안 지었을 경우. 함수를 직접 선언해서 넣는 경우.

첫째함수(function(){
    console.log(2)
}); 

첫째함수(function(){
    둘째함수(function(){
        셋째함수(function(){

        });
    });
}); 

-> 아주 지저분해진다. 더 쉽게 쓰기 위한 Promise패턴
첫째함수().then(function(){
}).then(function(){});
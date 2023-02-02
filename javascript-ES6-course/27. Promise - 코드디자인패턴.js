◆ Promise
promise 순차적 실행을 위해 콜백함수 대신 쓸 수 있는 코딩패턴.

실패할 경우에도 코드 실행 가능.
1번 실행 후 성공시 2번 실행, 실패시 3번 실행 이런 코드가 가능해진다.

콜백함수 대신 promise 쓰는 이유
- 콜백 대신 예쁜 코드.
- 성공/실패의 경우에 맞춰 각각 다른 코드 실행 가능.

var 프로미스 = new Promise(); // 성공,실패 판정 기계

프로미스.then(function(){
}).then(function(){
}); 

◆프로미스.then(function(){}) : 성공일 경우 실행할 코드.

◆프로미스.catch(function(){}) : 실패할 경우에 나오는 코드.

◆프로미스.finally(function(){}) : 성공이든 실패든 뭔가 일어났을 때 실행하는 코드


◆ 성공,실패 판정 기계인 promise 디자인하는 법

var 프로미스 = new Promise(function(성공,실패){}); 
var 프로미스 = new Promise(function(resolve,reject){}); 

var 프로미스 = new Promise(function(성공,실패){
    성공(); // 성공판정 내리는 법. 이 판정을 내리면 .then함수 실행
    실패(); // 실패판정 내리는 법. 이 판정이 내리면 .catch함수 실행
}); 

예시) 

var 프로미스 = new Promise(function(성공,실패){
    var 어려운연산 = 1 + 1;
    성공();
});

프로미스.then(function(){
    console.log('성공했어요');
}).catch(function(){
    console.log('실패했어요');
});

◆성공/실패시 데이터 전달하기

var 프로미스 = new Promise(function(성공,실패){
    var 어려운연산 = 1 + 1;
    성공(어려운연산); // 여기 안에 넣은 파라미터가 then까지 전달됨.
});
프로미스.then(function(결과){
    console.log(결과); // 2출력
}).catch(function(){
    console.log('실패했어요');
});

ex) 1초 후에 성공하는 promise 그리고 성공시 특정 코드를 실행

var 프로미스 = new Promise(function(성공,실패){
    setTimeout(function(){
        성공()
    },1000);
});
프로미스.then(function(){
    console.log('성공했어요')
}).catch(function(){
    console.log('실패했어요')
})

◆ promise의 3가지 상태
프로미스는 일종의 오브젝트이다. 출력해보면 오브젝트가 나오는데 상태를 볼 수 있다.

1. 성공하면 <resolved>
2. 판정 대기중이면 <pending>
3. 실패하면 <rejected>

◆ promise의 오해
비동기적 처리가 가능하게 바꿔주는 문법이 아니다. 
그냥 콜백함수 디자인의 대체품.

promise가 적용된 곳들
jQuery.ajax().done(function(){}).fail()
fetch().then().catch()
// fetch()는 프로미스를 return한다. 


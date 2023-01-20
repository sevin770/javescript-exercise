순차적으로 많은 걸 실행할 때 유용하다.
- promise를 좀 더 깔끔하게 쓸 수 있는 문법?

◆ async 
함수 선언 앞에서만 붙일 수 있다. 
async를 붙이면 함수실행 후에 promise 오브젝트가 남는다. promise return한다.
함수가 promise역할 가능.
이 함수 자체가 Promise가 되어버림.
new Promise어쩌구 안해줘도 됨.
단, 단점은 성공할 경우에만 가능하다. 실패할 경우 설정x

async function 더하기(){
    1+1;
}
더하기().then(function(){
    console.log(' 성공')
});
//----------------------

async function 더하기(){
    return 1+1; // return을 붙이면 연산결과도 볼 수 있다.
}
더하기().then(function(연산결과){
    console.log(연산결과)
});
//----------------------

◆ await
async function 안에서만 쓰는 await 키워드.
then 대신 사용한다. 

//--------------
- 함수 안에서 promise 쓰기

async function 더하기(){
    var 프로미스 = new Promise(function(성공,실패){
        var 힘든연산 = 1+1;
        성공();
    });
    프로미스.then(function(){ // then 대시 awit사용이 가능하다.
        console.log('성공했어요');
    });
}
더하기(); // 성공했어요 출력

//--------------
- await 사용

async function 더하기(){
    var 프로미스 = new Promise(function(성공,실패){
        var 힘든연산 = 1+1;
        성공(100);
    });
    var 결과 = await 프로미스; // 프로미스 해결까지 기다리라는 코드. 성공판정이 나오면 결과에 담아줌
    console.log(결과); // 100출력


    // 프로미스.then(function(){ // then 대시 awit사용이 가능하다.
    //     console.log('성공했어요');
    // });
}

//-------------
- await은 프로미스 실패시 에러가 난다.

async function 더하기(){
    var 프로미스 = new Promise(function(성공,실패){
        var 힘든연산 = 1+1;
        실패(100);
    });
    var 결과 = await 프로미스; // try catch를 사용한다. 
    console.log(결과); // 에러출력
}
더하기();

◆ try{이걸해보고 에러나면} catch {이걸 실행해주세요}

async function 더하기(){
    var 프로미스 = new Promise(function(성공,실패){
        var 힘든연산 = 1+1;
        실패(힘든연산); // 프로미스 연산결과는 변수에 저장 가능
    });
    try {
        var 결과 = await 프로미스;
        console.log(결과); // 에러출력
    } catch {
        console.log('프로미스 연산이 잘 안 되었군요.');
    }
}
더하기();

(예제)
버튼 누르면 성공 판정하는 promise. 성공시 '성공했어요'출력

<div><button id = "btn">버튼</button></div>
<script>
      var btn = document.querySelector('#btn');

      async function 버튼(){
        var 프로미스 = new Promise(function(성공){
            btn.addEventListener('click', function(){
            성공('성공했어요');
          });
        });
        var 결과 = await 프로미스;
        console.log(결과);
      }
      버튼();
</script>
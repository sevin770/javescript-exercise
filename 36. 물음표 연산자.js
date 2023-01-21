?. / ?? 연산자
에러를 감춰준다. 

var user = {
    name : 'kim',
    age : 20,
};

console.log(user.age) // 20출력
console.log(user?.age) // ?. 왼쪽이 비어있으면 undefined가 출력된다. 

◆ ?. : optional chaining 연산자
?. 왼쪽이 null, undefined면 점 안 찍어주고 undefined 남겨줌. 값이 있으면 그냥 .과 같다. 

- 언제씀?
중첩된 object자료에서 자료 뽑을 때 reference에러없이 안전하게 뽑을 수 있다.

var user = {
    name : 'kim',
    //age : {value : 20} 안만들어놨다고 가정.
};
console.log(user.age.value) // 에러가 난다. 여기서 코드실행 중단. 

미리 예방하려면 if문 쓰고 그래야 하는데 .? 쓰면 간편하다
console.log(user.age?.value) // 자료가 없으면 실행하지 않고 undefined를 출력한다. 

- 중첩되지 않은 object에서 .?를 쓰는 건 ㄴㄴ
그런 자료는 ?. 안써도 그냥 자동으로 undefined를 남겨준다. 
점 찍는 게 2개 이상일 떄가 문제

var user = {
    name : 'kim',
};
console.log(user.age); // undefined출력
console.log(user.age.value); // 에러출력

(예시) html작성 시에도 유용
document.querySelector('#a').innerHTML // 이런 거에서 뭐 id명이 틀리면 에러가 뜨는데
document.querySelector('#a')?.innerHTML // ?.쓰면 undefined출력.


◆ ?? : nullish coalescing 연산자
?? 왼쪽이 null,undefined면 오른쪽 꺼를 출력해달라.
console.log(undefined인변수 ?? '대신보여줄문자');

(예시)
var user; 
console.log(user ?? '로딩중'); //데이터가 3초 후에 도착한다면? 그동안 에러가 뜨고 그럴 텐데 사용하면 됨.  

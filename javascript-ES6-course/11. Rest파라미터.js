◆ REST함수
파라미터 자리에 ...사용하면 rest파라미터
모든 파라미터를 array로 감싸겠습니다.라는 뜻. 
이 자리에 오는 모든 파라미터를 []에 보관해 준다.

...의 뜻 2가지
1.spread operator
2.rest parameter

function 함수2(...파라미터들) {
    console.log(파라미터들)
}
함수2(1,2,3,4,5,6,7); // 함수 안에 들어온 파라미터를 전부 담은 array출력

* arguments와 차이점?
- arguments : 모든 파라미터를 []에 담아준다.
- rest parameter : 해당 자리에 오는 모든 파라미터를 []에 담아준다.
(예시)
function 함수2(a,b, ...파라미터들) {
    console.log(파라미터들)
}
함수2(1,2,3,4,5,6,7,8); // 3,4,5,6,7,8 만 출력된다. 

◆ rest와 spread 구분하기
1. 함수 파라미터 자리에 붙으면 rest
2. 나머지는 spread

◆ rest 주의점
1. 가장 뒤에 써야 함.
function 함수2(...파라미터들,a,b){} 이런 식으로 하면 안됨.
2. 두 번 이상 쓸 수 없다. 한 번만 가능.

---------------------------------------------------------------------------

(예제) 모든 파라미터들을 하나씩 콘솔창에 출력해주는 함수?
array가 아니라 한줄씩 하고 싶다면?

function 함수(...rest){
    for( var i = 0; i < rest.length; i++){
        console.log(rest[i]);
    }
}
함수(1,2,3,4,sdf,sd,3,312); //몇 개를 집어넣든간에 다 출력됨. 

- arguments는 파라미터를 미리 지정해줘야 하지만, ...rest는 미리 지정안해도 사용할 때 추가됨.

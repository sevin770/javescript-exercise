switch  - if문 대신 쓸 수 있다.
if 는 다양한 조건식 가능 switch는 변수 1개만 테스트 가능. 등호비교만 가능.
스위치가 좀 더 간결하고 깔끔해보여서 씀. 변수 하나만 검사할 때 간편하게 사용.

변수가 case면 {}실행
break는 탈출. 실행종료. 브레이크를 안하면 case상관없이 밑에 코드도 다 실행됨.
else와 비슷한 default

let 변수 = 2+1;
switch(변수){
    case 3:
        alert('변수가 3이네요');
        break //스위치 실행 종료
    case 4:
        alert('변수가 4네요');
        break
    default:
        alert('아무것도 해당안됨');
}


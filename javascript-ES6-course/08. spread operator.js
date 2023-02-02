spread operator
... : 뭔가 내용물을 빼고 싶을 때 사용한다.

◆ spread operator
=괄호 벗겨주세요
=중괄호,대괄호,소괄호 안에서만 사용 가능하다.


1. array에 붙이면 대괄호를 제거해 준다.

var 어레이 = ['hello','world']
console.log(어레이); // array가 출력됨
console.log(...어레이); // hello world가 출력됨.
console.log('hello','world'); // 이렇게 쓴 것과 같다.

2. 문자에 붙인다면? 펼쳐준다. 

var 문자 = 'hello';
console.log(문자); // hello출력
console.log(...문자); //'h','e','l','l','o' 이렇게 해체한 것과 같다.

대괄호가 제거된 거랑 비슷함.
문자도 array처럼 인덱싱이 가능하기 때문이다.
문자[0] 하면 h출력 
문자[1] 하면 e출력... 등등 


- 어디에 쓰면 좋을까? 

◆ 어레이 합치기/복사 

var a = [1,2,3];
var b = [4,5];

var c = [...a]; // 1,2,3와 동일
console.log(c) // array[1,2,3] 출력

var d = [...a, ...b];
console.log(d) // array[1,2,3,4,5] 출력

var f = [a, b]
console.log(f); // 이렇게 해버리면 array[1,2,3] , array[4,5] 이런식으로 된 각각의 배열이 나온다.

◆ Deep copy 

- 오브젝트 복사
reference data type(array, object)은 등호로 복사하면 값을 공유한다. 

var a = [1,2,3];
var b = a; //그냥 등호로 복사하면 값을 공유한다. 
a[3] = 4;
console.log(a); // 1,2,3,4 배열 출력
console.log(b); // b를 건들지 않았는데 1,2,3,4 배열이 출력된다.

그래서 각각 독립적인 값을 가지도록 array,object를 복사하려면 spread operator를 이용해야 한다.

var a = [1,2,3];
var b = [...a];
a[3] = 4;
console.log(a); // 1,2,3,4 배열 출력
console.log(b); // 1,2,3 출력

- 오브젝트 합치기
대괄호가 아니라 중괄호도 벗겨준다.

var o1 = {a:1, b:2};
var o2 = {...o1, c:3}; 
console.log(o2);// a:1, b:2, c:3 출력


◆ 카피하다가 값 중복이 일어나면 어떻게 될까? -> 가장 뒤에 있는 걸 적용해 준다.

var o1 = {a:1, b:2};
var o2 = {a:2, ...o1}; 
console.log(o2); // {a:1, b:2} 출력. 뒤에 있는 걸 적용해줌.
-------------------------
var o1 = {a:1, b:2};
var o2 = {...o1, a:2}; 
console.log(o2); // {a:2, b:2} 출력 


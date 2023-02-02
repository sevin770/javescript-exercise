
◆ Primitive data type : 변수의 값이 그대로 저장됨
var 변수 = 1234;

- Primitive data type 다루기 : 복사
var 이름1 = '김';
var 이름2 = 이름1;
이름1 = '박'
console.log(이름1) // '박'출력
console.log(이름2) // '김'출력

◆ Reference data type : Array,object는 변수의 값이 저장이 안된다. 변수에 reference가 저장됨.
어레이,오브젝트가 저쪽에 있어요라고 가르키는 화살표.
var 어레이 = [1,2,3];  
var obj = {name : 'kim'}

- Reference data type 다루기1 : 복사 : 함부로 복사하면 안됨.
var 이름1 = { name : '김'};
var 이름2 = 이름1;
이름1.name = '박'
console.log(이름1) // '박'출력
console.log(이름2) // '박'출력

* 이름2는 데이터 변경 한 적이 없는데 왜 저렇게 될까?
변수에 데이터 저장 시에 이름1에 저장되는 게 아니라 저기있어요 라는 화살표(reference)가 저장된다.
var 이름1 = { name : '김'} 저기 저장되어있음; 이라고 표시한 것과 똑같다.
var 이름2 = 이름1; 복사해봤자 저기있습니다 라는 화살표를 복사.
이름1.name = '박' 데이터를 바꾸면 이름2도 똑같은 데이터를 가르키고 있는 화살표니까 바뀜.

- 복사하고 싶다면? - 생성기계를 만든다. 뒤에 배움.

- Reference data type 다루기2
var 이름1 = {name : '김'};
var 이름2 = {name : '김'};
이름1 == 이름2 // false가 출력된다. 

* 오브젝트가 저장된 게 아니라 저장된 데이터를 가르키는 각각 다른 화살표기 때문에 false가 뜬다.

- Reference data type 다루기3
오브젝트를 변경해주는 함수

//--------------------------------
var 이름1 = {name : '김'};
function 변경(obj){
    obj.name = 'park';
}
변경(이름1); // 'park'출력
//--------------------------------
var 이름1 = {name : '김'};
function 변경(obj){
    obj = {name : 'park'} // 오브젝트 재할당 함수
}
변경(이름1); // '김'출력. 변경이 안된다.

* 왜 다를까? 파라미터 때문이다.

파라미터는 변수생성&할당과 같다. 
변경(이름1); 은 변경(var obj = 이름1); 과 같다. 
그러니까 화살표가 하나 만들어진 것과 같다.
그냥 새로운 파라미터 변수의 화살표가 가르키는 데이터를 'park'으로 준것이기 때문에 안바뀌는 거다.
이름1의 데이터는 변화가 없다. 

(인간의 시점)
var 이름1 = { name : '김' };
function 변경(obj){
  obj = { name : 'park' };
}
변경(이름1);

(자바스크립트의 시점)
var 이름1 = { name : '김' };
function 변경(obj){
  obj = { name : 'park' };
}
변경(var obj = 이름1);
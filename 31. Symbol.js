
var 심볼 = Symbol('설명');

심볼 출력하면 Symbol(설명) 이 나온다.

◆ 심볼의 용도
Object 자료형의 비밀스런 key값

var person = { name : 'kim' };
비밀스런 데이터를 저장하고 싶다면?
person.weight = 100; 
이렇게 저장하면 다보임. person하면 다 출력됨.
몰래 주석을 달듯이 저장하고 싶다면 심볼을 만들면 된다. 
원래 Object의 key값은 문자만 가능했지만, ES6부터는 심볼도 가능하다. 

var weight = Symbol('내 시크릿 몸무게임');
var person = { name : 'kim' };
person.weight = 100;
person[weight] = 500;

//person을 출력하면 name값과 심볼값이 설명과 같이 나온다. 

반복문에서 심볼은 출력되지 않는다. enumerable x

for (var key in person){
    console.log(person[key]); // person안에 있는 모든 게 출력된다. name과 weight 100값만 출력. 
}
여기서 심볼값인 weight 500은 출력되지 않는다. 
반복문에 쓰지 말고 그냥 직접 person을 출력하면 나온다.
console.log(person);

ex) Symbol을 이용해서 내 키를 저장해보자.

var height = Symbol('내 시크릿 키임');
var me = {name : 'park'};
me[height] = 168;

for (var key in me){
  console.log(me[key]);
}

//--------------------------------
오브젝트 안에 심볼을 직접 넣어도 ㅇㅋ

var weight = Symbol('내 시크릿 몸무게임');
var person = { name : 'kim', [weight] : 500};
//person[weight] = 500;

◆ import해온 파일, 라이브러리 쓸 때 유용하다.
거기 있던 object에 자료를 추가하고 싶을 때 쓰면 좋음.
반복문에도 안 뜨니까 기존 코드 해칠 염려가 없음.


◆symbol특징

1. 설명이 같다고 같은 symbol이 아니다. 
설명은 그냥 설명일 뿐. 
symbol을 만들 떄 마다 유니크한 symbol이 생긴다. 

var a = Symbol('설명1');
var b = Symbol('설명1');

a===b // false 출력. 

* 전역심볼이 만들고 싶으면 어떡함?  .for을 붙여주면 됨.
2. Symbol.for()
같은 설명을 가지고 있는 심볼이 존재한다면 기존에 있던 심볼을 복붙해준다. 
var a = Symbol.for('설명1');
var b = Symbol.for('설명1'); // var b = a; 와 같다. 

3. 기존 내장 Symbol

var 어레이 [2,3,4];
어레이[Symbol.iterator] // 내부 데이터를 도와주는 함수. 30강 참고
자바스크립트가 array에 집어넣어놓은 기본 Symbol. 



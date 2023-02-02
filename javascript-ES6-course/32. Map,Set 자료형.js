◆ Map 자료형
key, value를 저장한다.
자료의 연관성을 표현하기 위해 쓴다.  
수학 연산등 사용할 때 가끔 사용함. 

◆ Map 자료형 만드는 법

var person = new Map();
person.set('name','kim');
person.set('age',20);

- person을 출력하면 Map{'name' => 'kim', 'age' => 20}이 출력됨
화살표는 왜 나올까? map 자료형은 자료의 연관성을 표현하기 위해 쓰기 때문.

- Object자료형은 자료 이름을 글자만 가능했지만 Map자료형은 다 가능하다.
숫자,배열 등등 다 가능.
person.set(100,'kim'); // {100=>'kim'} .출력
person.set([1,2,3],'kim'); // {Array(3)=>'kim'} .출력

◆ Map에 자료 꺼내는 법 get
person.get('age'); // 20 출력

◆ Map에 자료 삭제하는 법 delete
person.delete('age');

◆ Map에 자료 갯수 세는 법 size
person.size; // 2 출력

◆ 반복문으로 Map에서 자료 꺼내는 법
person.keys() // 하면 MapIterator 어쩌구가 뜬다. 그래서 for of반복문 써주면 됨.

person.set([1,2,3],'kim');
person.set('age',20);

for (var key of person.keys()){ // key값 말고 value값을 넣을 수도 있다. 
    console.log(key); //  [1,2,3] array 와 age가 한 줄씩 출력
}

◆ Map자료형에 직접 자료 집어넣을 땐?

ver person = new Map([
    ['name','Kim'],
    ['age', 20]
]);

//------------------------------------------------------------------------

◆ Set 자료형
- 중복 자료를 허용하지 않는 Array와 비슷하다.

var 출석부 = ['john','tom','andy','tom']; // 실수로 중복자료가 들어가 있다면? 중복을 지워주는 Set자료형을 쓰자.

◆ Set 자료형 만드는 법
var 출석부2 = new Set(['john','tom','andy','tom']);
// array와 유사하지만 출력해보면 {}안에 있는 array로 나열되서 출력됨.
// {john','tom','andy'} 출력. 중복되는 건 알아서 지워서 출력해줌.

◆ Set 자료형에 자료 추가하기 add
출석부2.add('sally');
// {john','tom','andy','sally'} 출력.
// 중복된 값이면 추가되지 않는다. 

◆ Set 자료형에 자료 제거하기 delete
출석부2.delete('sally');

◆ Set 자료형에 자료 확인하기 has
- true/false 출력
출석부2.has('sally') // false출력

◆ Set 자료형에 갯수 세는 법 size
출석부2.size // 3출력. 중복값은 모두 제거하기 때문이다. 

◆ Set자료형 <-> Array자료형 : 두 자료형을 자유롭게 바꿀 수 있다.

◆ Array의 자료형의 중복자료를 제거하고 싶다면?
반복문을 돌려서 찾아야하지만 그냥 Set자료형으로 바꾸면 해결.

var 출석부 = ['john','tom','andy','tom']; 
var 출석부2 = new Set(['john','tom','andy','tom']); 

- 그런데 중괄호 안에 담긴 자료형이기 떄문에 array처럼 사용할 수가 없다. 
중복 제거 후에 다시 array자료형으로 바꾸기.

출석부 = [...출석부2]; //중괄호를 다 없애고 나열후에 다시 []안에 담음. 

◆ Set자료형에 반복문 돌리기

